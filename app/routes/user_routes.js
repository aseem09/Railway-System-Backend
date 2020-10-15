var express = require('express');

const userController = require("../controllers/user_controller.js");

module.exports = app => {

  app.get('/users', userController.getUsers);
  app.post("/users", userController.create);

};