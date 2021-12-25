//Require's
/*const fs = require("fs");

const path = require("path");

//Model
const User = {
 // fileName: "../models/User.js",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },

  findAll: function () {
    return this.getData();
  },

  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },

  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  create: function (userData) {
    let allUsers = this.findAll();
    let newUser = {
      id: this.generateId(),
      ...userData,
    };
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
    return newUser;
  },

  edit: function (userData) {
    let allUsers = this.findAll();
    let editedUser = {
      id: this.findByPk(userData.id),
      ...userData,
    };
    allUsers.forEach((user, index) => {
      if (user.id == userData.id) {
        allUsers[index] = editedUser;
      }
      fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
      return editedUser;
    });
  },

  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
    return true;
  },
};

module.exports = User;
//*/