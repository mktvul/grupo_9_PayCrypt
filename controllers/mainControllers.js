//Require's
const path = require("path");
const fs = require("fs");

//Data base
const productsFilePath = path.join(__dirname, "..data/products.json"); //Identificamos la ruta de nuestra base de datos de productos
const products = JSON.parse(fs.readFileSync(productsFilePath), "utf-8"); //Convertimos la base de datos de productos JSON en un array de objetos literales

const usersFilePath = path.join(__dirname, "..data/users.json"); //Identificamos la ruta de nuestra base de datos de usuarios
const users = JSON.parse(fs.readFileSync(usersFilePath), "utf-8"); //Convertimos la base de datos de usuarios JSON en un array de objetos literales

//Controller
const mainControllers = {
  index: (req, res) => {
    res.render("index");
  },

  details: (req, res) => {
    res.render("./products/details");
  },

  login: (req, res) => {
    res.render("./users/login");
  },

  register: (req, res) => {
    //Método GET
    res.render("./users/register");
  },

  storeUser: (req, res) => {
    let newUser = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      password: req.body.password,
      image: "default-user.png",
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    res.redirect("/");
  },

  editUser: (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => {
      return user.id == id;
    });
    res.render("users/edit", {
      editedUser: user,
    });
  },

  updateUser: (req, res) => {
    //Método PUT
    let id = req.params.id;
    let userToEdit = users.find((user) => {
      return user.id == id;
    });

    let editedUser = {
      id: id,
      name: req.body.name,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      password: req.body.password,
      image: userToEdit.image,
    };

    users.forEach((user, index) => {
      if (user.id == id) {
        users[index] = editedUser;
      }
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    res.redirect("/");
  },

  removeUser: (req, res) => {
    //Método DELETE
    let id = req.params.id;

    let usersList = users.filter((user) => {
      return user.id != id;
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(usersList, null, " "));

    res.redirect("/");
  },

  cart: (req, res) => {
    res.render("./products/cart");
  },

  create: (req, res) => {
    res.render("./products/create");
  },

  edit: (req, res) => {
    res.render("./products/edit");
  },
};

module.exports = mainControllers;
