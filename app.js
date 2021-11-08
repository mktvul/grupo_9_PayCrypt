//Require's
const express = require("express");
const path = require("path"); //Unifica rutas dentro de los sistemas operativos
const methodOverride = require("method-override");

//Express
const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, "./public"))); // Le digo a express que quiero tener la carpeta "public" como un recurso de archivos estáticos
app.use(express.urlencoded({ extended: false })); //Convierte a json la info que viene por HTML desde el formulario
app.use(express.json()); //Convierte a json la info que viene desde js cliente
app.use(methodOverride("_method")); //Nos permite usar los métodos PUT y DELETE

//Template engine
app.set("view engine", "ejs"); // Utiliza el motor de plantillas ejs
app.set("views", path.join(__dirname, "views")); // Utiliza las vistas de la carpeta views

//Route system
const router = require("./routers/mainRouters");
const usersRouter = require("./routers/usersRouters");
const productsRouters = require("./routers/productsRouters");

app.use("/", router); // Al ingresar al home deriva a routers
app.use("/users", usersRouter); //Router de usuarios
app.use("/products", productsRouters); //Router de productos

//Set the server to listen
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
