const db = require("../database/models");


module.exports =  {
    list: (req, res) =>{
        db.Product.findAll().then(
            Product=>{
                return res.json({
                    total: Product.length,
                    data: Product,
                    status:200
                })
            }
        )
    },

    productId: (req, res) =>{
        db.Product.findByPk(req.params.id)
        .then(
            Product=>{
                return res.json({
                    data: Product,
                    status:200
                })
            }
        )
    }

}