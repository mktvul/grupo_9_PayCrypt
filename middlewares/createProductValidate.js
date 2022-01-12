const path = require("path");
const { check } = require('express-validator');

module.exports = [
   check('name').notEmpty().isLength({min: 5}).withMessage('Ingresar un nombre'),
   check('shortDescription').notEmpty().withMessage('Ingresar una breve descripción del producto'),
   check('price').notEmpty().withMessage('Debe ingresar un precio valido'),
   check('description').notEmpty().isLength({min: 20}).withMessage('Ingresar una descripción del producto'),
   check('category').notEmpty().withMessage('Ingresar una categoria'),
   check('coin').notEmpty().withMessage('Especificar la moneda'),
   check('image').custom((value, { req }) => {
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
