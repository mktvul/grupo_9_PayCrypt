const db = require("../database/models");


 var deportes =0;
    db.Product.findAll()
      .then((product) => {
        for (let i = 0; i < product.length; i++) {
          if (product[i].categoryId == 1) {
           deportes++;
          }
        }
       
})


var inmuebles =0;
db.Product.findAll()
  .then((product) => {
    for (let i = 0; i < product.length; i++) {
      if (product[i].categoryId == 2) {
        inmuebles++;
      }
    }
   
})



var mineria =0;
db.Product.findAll()
  .then((product) => {
    for (let i = 0; i < product.length; i++) {
      if (product[i].categoryId == 3) {
        mineria++;
      }
    }
   
})




var nft =0;
db.Product.findAll()
  .then((product) => {
    for (let i = 0; i < product.length; i++) {
      if (product[i].categoryId == 4) {
        nft++;
      }
    }
   
})





var tecnologia =0;
db.Product.findAll()
  .then((product) => {
    for (let i = 0; i < product.length; i++) {
      if (product[i].categoryId == 5) {
        tecnologia++;
      }
    }
   
})

var vehiculos =0;
db.Product.findAll()
  .then((product) => {
    for (let i = 0; i < product.length; i++) {
      if (product[i].categoryId == 6) {
        vehiculos++;
      }
    }
   
})



var data =[];
db.Product.findAll()
  .then((product) => {
    for (let i = 0; i < product.length; i++) {
<<<<<<< HEAD
        data.push({id:product[i].id, name:product[i].name, description:product[i].description, detail:"http://localhost:3000/product/detail/"+ product[i].id })
=======
        data.push({id:product[i].id, name:product[i].name, description:product[i].description, detail:"http://localhost:3001/products/detail/"+ product[i].id })
>>>>>>> 7b2734d0d57d281d5fba0bdf2088f61d7a130a3c
      }
    
})
   



module.exports =  {
    list: (req, res) =>{
        db.Product.findAll().then(
            Product=>{
                return res.json({
                    total: Product.length,
                    totalDeDeportes:deportes,
                    totalDeInmuebles: inmuebles,
                    totalDeMineria: mineria,
                    totalDeNft: nft,
                    totalDeTecnologia: tecnologia,
                    totalDeVehiculos: vehiculos,      
                    data: data,
                    status:200
                })
            }
        )
    },

    productId: (req, res) =>{
        db.Product.findByPk(req.params.id, {
            include: [
              { association: "users" },
              { association: "categories" },
              { association: "coins" },
              { association: "carts" },
            ],
          })
        .then(
            Product=>{
                return res.json({
                    data: Product,
                    categoria: Product.categories.name,
                    imagen: "http://localhost:3000/images/products/"+ Product.image,
                    status:200
                })
            }
        )
    }

}