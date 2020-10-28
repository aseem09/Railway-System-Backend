const adminController = require("../controllers/admin_controller.js");

module.exports = router => {

  router.post('/admin', adminController.create);
  router.get('/admins', adminController.getAdmins);

};