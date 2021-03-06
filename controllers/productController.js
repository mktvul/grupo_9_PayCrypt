const path = require("path");
const db = require("../database/models");
const userLogged = require("../middlewares/userLogged");
const { validationResult } = require("express-validator");

module.exports = {
  registrarNuevoUsuario: function (req, res) {},
};

// sequelize
const sequelize = require("sequelize");
const Op = sequelize.Op;

const productsControllers = {
  //create
  create: function (req, res) {
    console.log("esto es console log de req.session" + req.session);
    console.log(
      "esto es un console log de req.session.userLogged.location" +
        req.session.userLogged.location
    );
    res.render("./product/create");
  },
  //store
  store: function (req, res) {
    let resultadoValidacion = validationResult(req);
    if (resultadoValidacion.errors.length == 0) {
      db.Product.create({
        name: req.body.name,
        shortDescription: req.body.shortDescription,
        price: req.body.price,
        description: req.body.description,
        date: new Date().getTime(),
        image: req.file.filename,
        categoryId: req.body.category,
        coinId: req.body.coin,
        userId: req.session.userLogged.id,
        }).then(() => {
        res.redirect("/");
      });
    } else {
      res.render("./product/create", { errores: resultadoValidacion.errors });
    }
    //.catch((error) => res.send(error));
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
    let resultadoValidacion = validationResult(req);
    if (resultadoValidacion.errors.length == 0) {
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
      ).then(() => {
        res.redirect("/product/detail/" + req.params.id);
      });
    } else {
      db.Product.findByPk(req.params.id).then((product) => {
        res.render("./product/edit", {
          product,
          errores: resultadoValidacion.errors,
        });
      });

      //.catch((error) => res.send(error));
    }
  },

  //eliminar

  delete: function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.redirect("/");
    }).catch((error) => res.send(error));
},

  //listar

  // listAll: function (req, res) {
  //   //cambiamos nombre, recordar cambiarlo
  //   db.Product.findAll().then((productsSent) => {
  //     res.render("./product/products", { productsSent });
  //   });
  // },

  //con location
  listAll: function (req, res) {
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ],
    }).then((productsSent) => {
      res.render("index", { productsSent });
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
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ],
      where: {
        name: { [Op.like]: "%" + req.body.search + "%" }, // buscamos por el nombre que ingresa en el search //vemos de usar like = %nombre%
      },
    })
      .then((productsSent) => {
        res.render("./product/products", { productsSent });
      })
      .catch((error) => res.send(error));
  },

  deportes: function (req, res) {
    var productsSent = [];
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ]})
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 1) {
            productsSent.push(product[i]);
          }
        }
        res.render("./product/categoryDeportes", { productsSent });
      })
      .catch((error) => res.send(error));
  },
  inmuebles: function (req, res) {
    var productsSent = [];
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ]})
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 2) {
            productsSent.push(product[i]);
          }
        }
        res.render("./product/categoryInmuebles", { productsSent });
      })
      .catch((error) => res.send(error));
  },

  mineria: function (req, res) {
    var productsSent = [];
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ]})
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 3) {
            productsSent.push(product[i]);
          }
        }
        res.render("./product/categoryMineria", { productsSent });
      })
      .catch((error) => res.send(error));
  },

  nft: function (req, res) {
    var productsSent = [];
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ]})
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 4) {
            productsSent.push(product[i]);
          }
        }
        res.render("./product/categoryNFT", { productsSent });
      })
      .catch((error) => res.send(error));
  },

  tecnologia: function (req, res) {
    var productsSent = [];
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ]})
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 5) {
            productsSent.push(product[i]);
          }
        }
        res.render("./product/categoryTecnologia", { productsSent });
      })
      .catch((error) => res.send(error));
  },
  vehiculos: function (req, res) {
    var productsSent = [];
    db.Product.findAll({
      include: [
        { association: "users" },
        { association: "categories" },
        { association: "coins" },
        { association: "carts" },
      ]})
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 6) {
            productsSent.push(product[i]);
          }
        }
        res.render("./product/categoryVehiculos", { productsSent });
      })
      .catch((error) => res.send(error));
  },

  cart: function(req,res){
    res.render("./product/cart")
  }



};

module.exports = productsControllers;
