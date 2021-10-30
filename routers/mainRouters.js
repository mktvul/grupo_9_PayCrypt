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

//Users
router.get("/login", mainControllers.login);

//User - register
router.get("/register", mainControllers.register);
router.post("/", mainControllers.storeUser);

//User - edit
router.get("/edit/:id", mainControllers.editUser);
router.put("/edit/:id", mainControllers.updateUser);

//User - delete
router.delete("/delete/:id", mainControllers.removeUser);

module.exports = router;
