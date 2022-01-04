//Require's
const express = require("express");
const router = express.Router();

//Controllers
const productsControllers = require("../controllers/productController");

//Middlewares
const productStorage = require("../middlewares/productStorage"); //Multer
const createProductValidate = require("../middlewares/createProductValidate"); //Express-validation
const editProductvalidate = require("../middlewares/editProductvalidate"); //Express-validation

//Products GET
router.get("/", productsControllers.listAll);
router.get("/detail/:id/", productsControllers.detail);
//router.get("/cart", productsControllers.cart);

//Crear un producto (muestra form por GET y acción de crear por POST)
router.get("/create", productsControllers.create);
router.post("/", productStorage.single("image"),createProductValidate, productsControllers.store);

// Editar un producto (muestra form por GET y acción de editar por PUT)
router.get("/edit/:id/", productsControllers.edit);

// Eliminar un producto
router.post("/delete/:id/", productsControllers.delete);

router.post("/edit/:id/", productStorage.single("image"),editProductvalidate, productsControllers.update);


// Search 
router.post('/search', productsControllers.search);

//categorys
router.get("/categoryDeportes", productsControllers.deportes);
router.get("/categoryInmuebles", productsControllers.inmuebles);
router.get("/categoryMineria", productsControllers.mineria);
router.get("/categoryNFT", productsControllers.nft);
router.get("/categoryTecnologia", productsControllers.tecnologia);
router.get("/categoryVehiculos", productsControllers.vehiculos);


module.exports = router;
