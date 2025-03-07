
const User = require('../models/user_model.js');
const userService = require('../services/user_service.js')

class AuthenticationController {
  login = (req, res) => {

    const { user_name, user_password } = req.body;

    const user = new User({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
    });

    console.log("UserService.getUserFromId() called");
    userService.getUserFromId(user, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Server Error"
        });
      }
      if (data.length == 1) {
        res.send(data);
      }
      else res.status(400).send({
        message: "Username or Password incorrect"
      });
    });
  }
}

module.exports = new AuthenticationController();