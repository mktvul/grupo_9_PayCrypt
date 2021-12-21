//Require's
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

//Controller
const userController = {
  register: (req, res) => {
    return res.render("./user/register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req); //express

    if (resultValidation.errors.length > 0) {
      return res.render("./user/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userInDB) => {
      if (userInDB) {
        return res.render("./user/register", {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          oldData: req.body,
        });
      }
    });
    db.User.create({
      name: req.body.name,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      image: req.file ? req.file.filename : req.session.userLogged.image,
      location: req.body.location,
    });
    // let userCreated = User.create(userToCreate); //puso seba por las dudas
    return res.redirect("/user/login");
  },

  login: (req, res) => {
    return res.render("./user/login");
  },

  loginProcess: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userToLogin) => {
      if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );

        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;

          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }
          return res.redirect("../");
        }

        return res.render("./user/login", {
          errors: {
            email: {
              msg: "Las credenciales son inválidas",
            },
          },
        });
      }

      return res.render("./user/login", {
        errors: {
          email: {
            msg: "No se encuentra este email en nuestra base de datos",
          },
        },
      });
    });
  },

  //vemos el detalle
  profile: (req, res) => {
    return res.render("./user/profile", {
      user: req.session.userLogged,
    });
  },

  edit: (req, res) => {
    return res.render("./user/edit", {
      user: req.session.userLogged,
    });
  },

  editProcess: (req, res) => {
    let userToEdit = {
      id: req.session.userLogged.id,
      name: req.body.name,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      /*category: req.body.category,*/
      image: req.file ? req.file.filename : req.session.userLogged.image,
    };

    let userEdited = db.User.edit(userToEdit);
    return res.redirect("/user/profile");
  },

  delete: (req, res) => {
    console.log(req.session.userLogged.id);
    let userDeleted = db.User.delete(req.session.userLogged.id);
    return res.redirect("/");
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;
