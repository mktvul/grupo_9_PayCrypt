const express = require('express');
const app = express();
const path = require('path'); //unifica rutas dentro de los sistemas operativos;
const router = require('./routers/mainRouters');

app.use(
  express.static(path.join(__dirname, './public'))
); /*le digo a express que quiero tener la carpeta "public" como un recurso de archivos estáticos; */

app.set('view engine', 'ejs'); // Utiliza el motor de plantillas ejs

app.set('views', path.join(__dirname, 'views')); // Utiliza las vistas de la carpeta views

app.use('/', router); // Al ingresar al home deriva a routers

app.listen(3030, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});