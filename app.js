//Require's
const express = require("express");
const session = require("express-session");
const path = require("path"); //Unifica rutas dentro de los sistemas operativos
const methodOverride = require("method-override");
const cookie = require("cookie-parser"); //cookies

//Express
const app = express();

//usamos cookies
app.use(cookie());

//Middlewares
const userLogged = require("./middlewares/userLogged");

app.use(express.static(path.join(__dirname, "./public"))); // Le digo a express que quiero tener la carpeta "public" como un recurso de archivos estáticos
app.use(express.urlencoded({ extended: false })); //Convierte a json la info que viene por HTML desde el formulario
app.use(express.json()); //Convierte a json la info que viene desde js cliente
app.use(methodOverride("_method")); //Nos permite usar los métodos PUT y DELETE

app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(userLogged); //Verifica que el usuario esté logueado

//Template engine
app.set("view engine", "ejs"); // Utiliza el motor de plantillas ejs
app.set("views", path.join(__dirname, "views")); // Utiliza las vistas de la carpeta views

//Route system
const router = require("./routers/mainRouters");
const usersRouter = require("./routers/usersRouters");
const productsRouters = require("./routers/productsRouters");
const { Cookie } = require("express-session");

app.use("/", router); // Al ingresar al home deriva a routers
app.use("/users", usersRouter); //Router de usuarios
app.use("/products", productsRouters); //Router de productos

//Set the server to listen
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
