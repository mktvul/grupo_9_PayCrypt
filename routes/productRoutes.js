//Require's
const express = require("express");
const router = express.Router();

//Controllers
const productsControllers = require("../controllers/productController");

//Middlewares
const productStorage = require("../middlewares/productStorage"); //Multer

//Products GET
router.get("/", productsControllers.listAll);
router.get("/detail/:id/", productsControllers.detail);
//router.get("/cart", productsControllers.cart);

//Crear un producto (muestra form por GET y acción de crear por POST)
router.get("/create", productsControllers.create);
router.post("/", productStorage.single("image"), productsControllers.store);

// Editar un producto (muestra form por GET y acción de editar por PUT)
router.get("/edit/:id/", productsControllers.edit);

// Eliminar un producto
router.post("/delete/:id/", productsControllers.delete);

router.post("/edit/:id/", productStorage.single("image"), productsControllers.update);


// Search 

router.post('/search', productsControllers.search);

module.exports = router;
