//Require's
const path = require("path");

//Controller
const mainControllers = {
  index: (req, res) => {
    res.render("index");
  },

  details: (req, res) => {
    res.render("./products/details");
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
