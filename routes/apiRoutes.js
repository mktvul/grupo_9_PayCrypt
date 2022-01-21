//Require's
const express = require("express");
const router = express.Router();

//Controller
const apiController = require("../controllers/apiController");

//Index
router.get("/products", apiController.list);
router.get("/products/:id", apiController.productId);

module.exports = router;