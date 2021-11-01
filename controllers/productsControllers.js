//Require's
const path = require("path");
const fs = require("fs");

//Data base
const productsFilePath = path.join(__dirname, "..data/products.json"); //Identificamos la ruta de nuestra base de datos de productos
const products = JSON.parse(fs.readFileSync(productsFilePath), "utf-8"); //Convertimos la base de datos de productos JSON en un array de objetos literales

//Controller
