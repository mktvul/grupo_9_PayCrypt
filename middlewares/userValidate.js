//Require's
const path = require("path");
const { body } = require("express-validator");

//Validator
module.exports = [
  body("name").notEmpty().isLength({ min: 2 }).withMessage("Debes escribir tu nombre"),
  body("lastName").notEmpty().isLength({ min: 2 }).withMessage("Debes escribir tu apellido"),
  body("dni").notEmpty().withMessage("Debes escribir tu DNI"),
  body("location").notEmpty().withMessage("Debes escribir tu ubicación"),
  body("email")
    .notEmpty()
    .withMessage("Debes escribir tu email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de email válido"),
  body("password").notEmpty().isLength({ min: 8 }).withMessage("Debes escribir una contraseña"),
  body("passwordConfirm").isLength({ min: 8 }).notEmpty().withMessage("Debes confirmar la contraseña"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (!file) {
      throw new Error("Debes subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];
