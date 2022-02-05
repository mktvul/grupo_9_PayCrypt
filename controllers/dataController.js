const path = require("path");
const db = require("../database/models");

const dataControllers = {
  
  nosotros: function (req, res) {
    res.render("./data/nosotros");
    }    
  };
module.exports = dataControllers;
