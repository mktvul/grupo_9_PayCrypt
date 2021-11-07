//Require's
const express = require("express");
const router = express.Router();

//Controller
const usersControllers = require("../controllers/usersControllers");

//User - register
router.get("/register", usersControllers.register);
router.post("/", usersControllers.storeUser);

//Users - login
router.get("/login", usersControllers.login);

//User - edit
router.get("/edit/:id", usersControllers.editUser);
router.put("/edit/:id", usersControllers.updateUser);

//User - delete
router.delete("/delete/:id", usersControllers.removeUser);

module.exports = router;
