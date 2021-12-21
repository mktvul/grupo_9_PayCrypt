//Require's
const db = require("../database/models");

//Cookies
function userLogged(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = db.User.findAll();
  for(let i=0;i<userFromCookie.length;i++){       //agregue codigo MARCOS!!
     if(userFromCookie[i]==emailInCookie){
       var user = emailInCookie;
     }
  }

  //Funcion puesta 

  if (user) {
    req.session.userLogged = user;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLogged;
