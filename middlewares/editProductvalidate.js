const path = require("path");
const { check } = require('express-validator');

module.exports = [
   check('name').notEmpty().withMessage('Ingresar un nombre'),
   check('shortDescription').notEmpty().withMessage('Ingresar una breve descripción del producto'),
   check('priceProduct').notEmpty().withMessage('Debe ingresar un precio balido'),
   check('textarea').notEmpty().withMessage('Ingresar una descripción del producto'),
   check('categoryEdit').notEmpty().withMessage('Ingresar una categoria'),
   check('coinEdit').notEmpty().withMessage('Especificar la moneda'),
   check('photoProductEdit').custom((value, { req }) => {
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
