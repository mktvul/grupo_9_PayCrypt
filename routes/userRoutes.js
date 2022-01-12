//Require's
const express = require("express");
const router = express.Router();
const { body } = require('express-validator')


// Controller
const usersController = require("../controllers/userController");

// Middlewares
const userStorage = require("../middlewares/userStorage"); //Multer
const userValidate = require("../middlewares/userValidate"); //Express-validation
const userLoginValidations = require('../middlewares/userLoginValidations'); // Express-validation
const userGuest = require("../middlewares/userGuest");
const userAuthentication = require("../middlewares/userAuthentication");
const userLogged = require("../middlewares/userLogged");

// Formulario de registro
router.get("/register", userGuest, usersController.register);

// Procesar el registro
router.post("/register",userStorage.single("image"), userValidate, usersController.processRegister);

// Formulario de login
router.get("/login", userGuest, usersController.login);

// Procesar el login
router.post("/login", userLoginValidations, usersController.loginProcess);

// Perfil de Usuario
router.get("/profile", userAuthentication, usersController.profile);

// Editar perfil
router.get("/edit", userAuthentication, usersController.edit);
router.post("/edit", userStorage.single("image"), usersController.editProcess);

// Borrar perfil
router.get("/delete", usersController.delete);

// Logout
router.get("/logout", usersController.logout);

module.exports = router;
