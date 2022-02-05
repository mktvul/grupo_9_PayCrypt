const db = require('../database/models');
const Op = db.Sequelize.Op;



let data = [];

db.User.findAll()
    .then( users => {
        for (let i = 0; i < users.length; i++) {
            data.push({id:users[i].id, name:users[i].name, email:users[i].email, detail:'http://localhost:3001/user/profile/'+ users[i].id, image: '/images/users/'+ users[i].image });
            
        }
    })



module.exports = {
    list: (req, res) => {
        db.User.findAll()
        .then(users => {
            return res.status(200).json({
                Count: users.length, // cantidad total de usuarios en base
                data: data,
                        //  array con la coleccion de usuarios
                status: 200
            });
        })
    },
    userId: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
               data: {
                   name: user.name,
                   lastName: user.lastName,
                   dni: user.dni,
                   email: user.email,
                   image: 'http://localhost:3001/images/users/'+ user.image,
                   location: user.location,
               },
               status: 200 
            })
        })
    },
}