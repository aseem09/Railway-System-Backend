const trainController = require("../controllers/train_controller.js");

module.exports = router => {

  router.post('/train', trainController.create);

};