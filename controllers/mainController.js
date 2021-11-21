//Require's
const path = require("path");
const fs = require("fs");

//Data base
const productsFilePath = path.join(__dirname, "../database/products.json"); //Identificamos la ruta de nuestra base de datos de usuarios
const products = JSON.parse(fs.readFileSync(productsFilePath), "utf-8"); //Convertimos la base de datos de usuarios JSON en un array de objetos literales

//Controller
const controller = {
  index: (req, res) => {
    return res.render("index", {
      productsSent: products,
    });
  },
};

module.exports = controller;
