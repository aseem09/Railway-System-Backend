const authenticationController = require("../controllers/authentication_controller.js");

module.exports.routes = (router) => {

    router.post('/login', function (req, res) {
        authenticationController.login
    });

};