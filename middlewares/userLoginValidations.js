//Require's
const path = require("path");
const { body } = require("express-validator");


module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Debes escribir tu email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de email válido"),
        
    body("password").notEmpty().isLength({ min: 8 }).withMessage("Debes escribir una contraseña")  
  ];


