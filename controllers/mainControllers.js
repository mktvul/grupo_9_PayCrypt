const path = require("path");
const mainControllers = {
  index: (req, res) => {
    res.render('index');
  },

  details: (req, res) => {
    res.render('./products/details');
  },

  login: (req, res) => {
    res.render('./users/login');
  },

  register: (req, res) => {
    res.render('./users/register');
  },

  cart: (req, res) => {
    res.render('./products/cart');
  },

  create: (req, res) => {
    res.render('./products/create');
  },

  edit:  (req, res) => {
    res.render('./products/edit');
  },
};

module.exports = mainControllers;
