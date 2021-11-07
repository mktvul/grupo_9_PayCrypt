//Require's
const express = require("express");
const router = express.Router();

//Controllers
const mainControllers = require("../controllers/mainControllers");
const productsControllers = require("../controllers/productsControllers");

//Index
router.get("/", mainControllers.index);

//Products GET
router.get("/products", productsControllers.listOfProducts);
router.get("/products/:id/", productsControllers.details);
router.get("/cart", productsControllers.cart);

//Crear un producto (muestra form por GET y acción de crear por POST)
router.get("/create", productsControllers.create);
router.post("/products", productsControllers.store);

// Editar un producto (muestra form por GET y acción de editar por PUT)
router.get('/edit/:id/', productsControllers.edit); 
router.put('/edit/:id/', productsControllers.update);

// Eliminar un producto
router.delete('/products/delete:id/', productsControllers.destroy);

module.exports = router;
//Products
/*
router.get("/details", mainControllers.details);
router.get("/cart", mainControllers.cart);
router.get("/create", mainControllers.create);
router.get("/edit", mainControllers.edit);
*/
