
const authenticationService = require('../services/authentication_service.js')

class AuthenticationController {
  login = (req, res) => {

    const {user_name, password} = req.body;

    authenticationService.getUserFromId((user_name, password, err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User"
        });
      if (res)
        res.status(400).send({
          message:
            err.message || "Username or Password incorrect"
        });
      else res.send(data);
    })
  }
}

module.exports = AuthenticationController;