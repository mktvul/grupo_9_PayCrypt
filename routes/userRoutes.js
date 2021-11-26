//Require's
const express = require("express");
const router = express.Router();
const { body } = require('express-validator')
const validations = [
  body('name').notEmpty().withMessage('Debes completar tu nombre'),
  body('lastname').notEmpty().withMessage('Debes completar tu apellido'),
  body('dni').notEmpty().withMessage('Debes completar tu número de DNI'),
  body('email').notEmpty().withMessage('Debes completar tu email'),
  body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
  body('password1').notEmpty().withMessage('Debes ingresar tu contraseña'),
  body('category').notEmpty().withMessage('Debes seleccionar una categoría')
];

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
router.post("/login", validations, usersController.loginProcess);

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
