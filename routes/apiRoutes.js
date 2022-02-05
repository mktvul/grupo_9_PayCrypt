//Require's
const express = require("express");
const router = express.Router();

//Controller
const apiController = require("../controllers/apiController");
const apiUserController = require('../controllers/apiUserController');


//Index

router.get("/products", apiController.list);
router.get("/products/:id", apiController.productId);

// Users
router.get('/users', apiUserController.list);
router.get('/users/:id', apiUserController.userId);

module.exports = router;