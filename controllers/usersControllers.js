//Require's
const path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs'); // requiriendo bcrypt

//Data base
const usersFilePath = path.join(__dirname, "../data/users.json"); //Identificamos la ruta de nuestra base de datos de usuarios
const users = JSON.parse(fs.readFileSync(usersFilePath), "utf-8"); //Convertimos la base de datos de usuarios JSON en un array de objetos literales

//Controller
const usersControllers = {
  login: (req, res) => {
    //implementación de cookies en login
        res.render("./users/login");
  },

  //falta login proceess -marcos
   loginProcess:(req,res)=>{
    //falta texto
    if (req.body.remenberuser) {  //si tilda el check de recordar
        res.cookie("userEmail", req.body.email, { maxAge: 100 * 60 * 10 }); //guardamos 10 minutos el email
    }
    //falta texto
    res.redirect("/");//solo para que haga algo

   },

  logout: (req, res) => {
    res.ClearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/index");
  },

  register: (req, res) => {
    //Método GET
     res.render("./users/register");
  },

  storeUser: (req, res) => {
    //Guardamos el usuario
    let newUser = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file.filename
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    res.redirect("/");
  },

  editUser: (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => {
      return user.id == id;
    });
    res.render("users/edit.ejs", {
      editedUser: user, 
    });
  },

  updateUser: (req, res) => {
    //Método PUT
    let id = req.params.id;
    let userToEdit = users.find((user) => {
      return user.id == id;
    });

    let editedUser = {
      id: id,
      name: req.body.name,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      password: req.body.password,
      image: req.file ? req.file.filename : userToEdit.image,
    };

    users.forEach((user, index) => {
      if (user.id == id) {
        users[index] = editedUser;
      }
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    res.redirect("/");
  },

  removeUser: (req, res) => {
    //Método DELETE
    let id = req.params.id;

    let usersList = users.filter((user) => {
      return user.id != id;
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(usersList, null, " "));

    res.redirect("/");
  },
  profile: (req, res) => {
    res.render('users/edit.ejs')
  },
};

module.exports = usersControllers;
