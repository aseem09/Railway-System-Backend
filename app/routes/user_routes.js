var express = require('express');

const userController = require("../controllers/user_controller.js");

module.exports = app => {

  app.post('/users', function (req, res) {
    userController.Create
  });
  app.get('/users', function (req, res) {
    userController.Create
  });

};