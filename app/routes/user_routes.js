var express = require('express');

const userController = require("../controllers/user_controller.js");

module.exports = app => {

  app.post('/users', userController.create);
  app.get('/users', userController.getUsers);

};