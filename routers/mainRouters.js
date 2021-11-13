//Require's
const express = require("express");
const router = express.Router();

//Controllers
const mainControllers = require("../controllers/mainControllers");
const productsControllers = require("../controllers/productsControllers");

//Index
router.get("/", mainControllers.index);

module.exports = router;
