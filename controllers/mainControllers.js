const path = require("path");
const mainControllers = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  },

  details: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/detalle_de_producto.html"));
  },

  login: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/formulario_de_login.html"));
  },

  register: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/formulario_de_registro.html"));
  },

  cart: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/carrito_de_compras.html"));
  },

  create: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/create_products.html"));
  },

  edit:  (req, res) => {
    res.sendFile(path.join(__dirname, "../views/edit_products.html"));
  },
};

module.exports = mainControllers;
