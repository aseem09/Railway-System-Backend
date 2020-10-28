const Admin = require("../models/admin_model.js");
const adminService = require("../services/admin_service.js");

class AdminController {

  create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const admin = new Admin({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      posting_city: req.body.posting_city,
      address: req.body.address,
      aadhaar_number: req.body.aadhaar_number,
      phone_number: req.body.phone_number,
    });

    console.log("AdminService.create() called");
    adminService.create(admin, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Admin"
        });
      else res.send(data);
    });
  }

  getAdmins = (req, res) => {
    console.log("AdminService.getAll() called");
    adminService.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Admin"
        });
      else res.send(data);
    })
  }

}

module.exports = new AdminController();