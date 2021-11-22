//Require's
const path = require("path");
const { body } = require("express-validator");

//Validator
module.exports = [
  body("name").notEmpty().withMessage("Debes escribir tu nombre"),
  body("lastName").notEmpty().withMessage("Debes escribir tu apellido"),
  body("dni").notEmpty().withMessage("Debes escribir tu DNI"),
  body("email")
    .notEmpty()
    .withMessage("Debes escribir tu email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de email válido"),
  body("password").notEmpty().withMessage("Debes escribir una contraseña"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png"];

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
