//Require's
const express = require("express");
const router = express.Router();

//Controllers
const mainControllers = require("../controllers/mainControllers");
const productsControllers = require("../controllers/productsControllers");

//Products GET
router.get("/", productsControllers.listOfProducts);
router.get("/details/:id/", productsControllers.details);
router.get("/cart", productsControllers.cart);

//Crear un producto (muestra form por GET y acción de crear por POST)
router.get("/create", productsControllers.create);
router.post("/", productsControllers.store);

// Editar un producto (muestra form por GET y acción de editar por PUT)
router.get('/edit/:id/', productsControllers.edit); 
router.put('/edit/:id/', productsControllers.update);

// Eliminar un producto
router.delete('/delete/:id/', productsControllers.destroy);

module.exports = router;