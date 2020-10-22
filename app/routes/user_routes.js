const userController = require("../controllers/user_controller");

module.exports.routes = router => {

  router.post('/users', (req, res, next) =>
    userController.create(req, res, next)
  );
  router.get('/users', (req, res, next) =>
    userController.getUsers(req, res, next)
  );

};