//Require's
const path = require("path");
const { body } = require("express-validator");

//Validator
module.exports = [
  body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("lastName").notEmpty().withMessage("Tienes que escribir un apellido"),
  body("dni").notEmpty().withMessage("Tienes que escribir un dni"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
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
