//Require's
const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override"); //Nos permite usar los métodos PUT y DELETE
const path = require("path");

//Express
const app = express();

//Middlewares
const userLogged = require("./middlewares/userLogged");

//Session
app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);

//Cookies
app.use(cookies());

//app.use(userLogged); //Verifica que el usuario esté logueado

app.use(express.urlencoded({ extended: false })); //Convierte a json la info que viene por HTML desde el formulario

app.use(express.json()); //Convierte a json la info que viene desde js cliente

app.use(express.static("./public")); //Carpeta "public" como un recurso de archivos estáticos

app.use(methodOverride("_method")); //Nos permite usar los métodos PUT y DELETE

//Server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Template Engine
app.set("view engine", "ejs");
//app.set("views", path.join(__dirname, "views")); // Utiliza las vistas de la carpeta views

//Route system
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
//const { Cookie } = require("express-session");

app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
