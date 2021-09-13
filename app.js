const express = require("express");
const app = express();
const path = require("path"); //unifica rutas dentro de los sistemas operativos;

app.use(
  express.static(path.join(__dirname, "./public"))
); /*le digo a express que quiero tener la carpeta "public" como un recurso de archivos estáticos; */

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/formulario_de_registro", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/formulario_de_registro.html"));
});

app.get("/formulario_de_login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/formulario_de_login.html"));
});

app.get("/detalle_de_producto", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/detalle_de_producto.html"));
});

app.get("/carrito_de_compras", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/carrito_de_compras.html"));
});
