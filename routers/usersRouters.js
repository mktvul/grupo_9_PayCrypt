//Require's
const express = require("express");
const router = express.Router();
const multer = require('multer');

//Controller
const usersControllers = require("../controllers/usersControllers");

// CONFIGURACION DE MULTER //
const storage = multer.diskStorage( {
    destination: (req, file, callback) => {
        callback(null,'./public/images/users') // aqui se guardan las imagenes de los usuarios 
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname) // numero a partir de.. + nombre-del-archivo
    }
})
const upload = multer({storage}); //  upload - para poder enviar el archivo a la ruta 

//Middlewares
const userGuest = require("../middlewares/userGuest");
const userAuthentication = require("../middlewares/userAuthentication");

//User - register
router.get("/register", userGuest, usersControllers.register);
router.post("/", upload.single('image') , usersControllers.storeUser); // ya con multer 

//Users - login
router.get("/login", userGuest, usersControllers.login);
// falta el post del login..
router.post("/login", usersControllers.loginProcess);

//Users - logout
router.get("/logout", usersControllers.logout);

//User - edit
router.get("/edit/:id", userAuthentication, usersControllers.editUser);
router.put("/edit/:id", upload.single('image') ,usersControllers.updateUser);
//router.get('/edit', usersControllers.profile);

//User - delete
router.delete("/delete/:id", usersControllers.removeUser);

// User - Profile 
router.get('/profile', usersControllers.profile) // ruta a perfil de usuario 

module.exports = router;
