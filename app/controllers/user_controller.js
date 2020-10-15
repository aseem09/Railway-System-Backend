const User = require("../models/user_model.js");
const userService = require("../services/user_services.js");

exports.getUsers = (req, res) => {
  userService.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User"
      });
    else res.send(data);
  })
}

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty"
    });
  }

  const user = new User({
    user_name: req.body.user_name,
    phone_number: req.body.phone_number
  });

  userService.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User"
      });
    else res.send(data);
  });
};