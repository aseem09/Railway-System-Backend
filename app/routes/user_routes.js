const userController = require("../controllers/user_controller");

module.exports = router => {

  router.post('/users', userController.create);
  router.get('/users', userController.getUsers);

};