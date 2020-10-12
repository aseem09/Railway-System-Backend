const User = require("../models/user_model.js");

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Customer
    const user = new User({
      user_name : req.body.user_name,
      phone_number : req.body.phone_number
    });

    // Save Customer in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User"
        });
      else res.send(data);
    });
  };

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      else res.send(data);
    });
  };
// Find a single User with a UserId
exports.findOne = (req, res) => {

};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {

};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};