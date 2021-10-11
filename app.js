const express = require("express");
const app = express();
const path = require("path"); //unifica rutas dentro de los sistemas operativos;
const router = require("./routers/mainRouters");

app.use(
  express.static(path.join(__dirname, "./public"))
); /*le digo a express que quiero tener la carpeta "public" como un recurso de archivos estáticos; */

app.use("/", router);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});