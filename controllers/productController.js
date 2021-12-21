const path = require("path");
const db = require("../database/models");

const productsControllers = {
  //create
  create: function (req, res) {
    res.render("./product/create");
  },
  //store
  store: function (req, res) {
    db.Product.create({
      name: req.body.name,
      shortDescription: req.body.shortDescription,
      price: req.body.price,
      description: req.body.description, //ver lo de la hora
      image: req.file.filename,
      coinId: req.body.coin,
      categoryId: req.body.category,
      date: new Date().getTime()
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => res.send(error));
  },

  //mostrar producto a editar (/Get)
  edit: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        res.render("./product/edit", { product });
      })
      .catch((error) => res.send(error));
  },

  // editamos el producto (/Put)

  update: function (req, res) {
    db.Product.update(
      {
        name: req.body.name,
        shortDescription: req.body.shortDescription,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        coin: req.body.coin,
        category: req.body.category,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/product/detail/" + req.params.id)
      .catch((error) => res.send(error));
  },

  //eliminar

  delete: function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/").catch((error) => res.send(error));
  },

  //listar

  listAll: function (req, res) {
    //cambiamos nombre, recordar cambiarlo
    db.Product.findAll().then((productsSent) => {
      res.render("./product/products", { productsSent });
    });
  },

  //ver el detalle, usamos la funcion como un get

  detail: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        res.render("./product/detail", { product });
      })
      .catch((error) => res.send(error));
  },

  // buscar

  search: function (req, res) {
    db.Product.findAll({
      where: {
        name: req.body.search, // buscamos por el nombre que ingresa en el search
      }, //vemos de usar like = %nombre%
    });
    res.redirect("./product").catch((error) => res.send(error));
  },
};

module.exports = productsControllers;
