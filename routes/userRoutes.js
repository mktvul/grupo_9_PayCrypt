//Require's
const express = require("express");
const router = express.Router();

// Controller
const usersController = require("../controllers/userController");

// Middlewares
const userStorage = require("../middlewares/userStorage"); //Multer
const userValidate = require("../middlewares/userValidate"); //Express-validation
const userGuest = require("../middlewares/userGuest");
const userAuthentication = require("../middlewares/userAuthentication");

// Formulario de registro
router.get("/register", userGuest, usersController.register);

// Procesar el registro
router.post(
  "/register",
  userStorage.single("image"),
  userValidate,
  usersController.processRegister
);

// Formulario de login
router.get("/login", userGuest, usersController.login);

// Procesar el login
router.post("/login", usersController.loginProcess);

// Perfil de Usuario
router.get("/profile", userAuthentication, usersController.profile);

// Logout
router.get("/logout", usersController.logout);

module.exports = router;
