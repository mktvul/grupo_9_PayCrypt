//Require's
const path = require("path");

//Controller
const mainControllers = {

  //Página principal (GET)
  index: (req, res) => {
    res.render("index");
  },

};

module.exports = mainControllers;
