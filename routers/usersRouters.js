//Require's
const express = require("express");
const router = express.Router();

//Controller
const usersControllers = require("../controllers/usersControllers");

//Middlewares
const userGuest = require("../middlewares/userGuest");
const userAuthentication = require("../middlewares/userAuthentication");

//User - register
router.get("/register", userGuest, usersControllers.register);
router.post("/", usersControllers.storeUser);

//Users - login
router.get("/login", userGuest, usersControllers.login);

//Users - logout
router.get("/logout", usersControllers.logout);

//User - edit
router.get("/edit/:id", userAuthentication, usersControllers.editUser);
router.put("/edit/:id", usersControllers.updateUser);

//User - delete
router.delete("/delete/:id", usersControllers.removeUser);

module.exports = router;
