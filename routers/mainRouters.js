//Require's
const express = require("express");
const router = express.Router();

//Controller
const mainControllers = require("../controllers/mainControllers");

//Index
router.get("/", mainControllers.index);

//Products
router.get("/details", mainControllers.details);
router.get("/cart", mainControllers.cart);
router.get("/create", mainControllers.create);
router.get("/edit", mainControllers.edit);