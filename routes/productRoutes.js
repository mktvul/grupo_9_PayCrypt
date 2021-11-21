//Require's
const express = require("express");
const router = express.Router();

//Controllers
const productsControllers = require("../controllers/productController");

//Middlewares
const productStorage = require("../middlewares/productStorage"); //Multer

//Products GET
router.get("/", productsControllers.listOfProducts);
router.get("/detail/:id/", productsControllers.details);
router.get("/cart", productsControllers.cart);

//Crear un producto (muestra form por GET y acción de crear por POST)
router.get("/create", productsControllers.create);
router.post("/", productStorage.single("photoProduct"), productsControllers.store);

// Editar un producto (muestra form por GET y acción de editar por PUT)
router.get("/edit/:id/", productsControllers.edit);
router.put(
  "/edit/:id/",
  productStorage.single("photoProduct"),
  productsControllers.update
);

// Eliminar un producto
router.delete("/delete/:id/", productsControllers.destroy);

module.exports = router;
