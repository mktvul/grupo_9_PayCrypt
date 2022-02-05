const path = require("path");
const db = require("../database/models");

const resumenControllers = {
  
  resumen: function (req, res) {
    res.render("./data/resumen");
    }    
  };
module.exports = resumenControllers;
