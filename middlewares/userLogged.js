//agrego para poder leer los usuarios // MARCOS
const user = require("../data/users.json");


function userLogged(req, res, next) {
  res.locals.isLogged = false;
  //cookie
  var emailCookie = req.cookie.emailUser; //leo el email de la cookie
  var userCookie = user.findByField("email", emailCookie); //busco en el archivo requerido el imail y lo devuelvo

  if (userCookie) {
    eq.session.userLogged = userCookie; //si encontro un usuario que lo logee
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLogged;
