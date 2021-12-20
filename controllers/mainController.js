//Require's
const { Association } = require("sequelize/dist");
const db = require("../database/models");

//Controller
const controller = {
  index: (req, res) => {
    db.Product.findAll() 
    .then((productsSent)=>{
      res.render("index", {productsSent}); //enviamos a index. 
    })
  },
};

module.exports = controller;


/*
  {
      include:[
        {association:"users"}
      ]
    }
    
*/
