const User = require("../models/user_model.js");
const userService = require("../services/user_service.js");

class UserController {

  create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const user = new User({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      city: req.body.city,
      address: req.body.address,
      aadhaar_number: req.body.aadhaar_number,
      phone_number: req.body.phone_number,
    });

    console.log("UserService.create() called");
    userService.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User"
        });
      else res.send(data);
    });
  }

  getUsers = (req, res) => {
    console.log("UserService.getAll() called");
    userService.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User"
        });
      else res.send(data);
    })
  }

}

module.exports = new UserController();