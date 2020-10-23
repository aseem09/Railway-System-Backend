const authenticationController = require("../controllers/authentication_controller.js");

module.exports = (router) => {

    router.post('/login', authenticationController.login);

};