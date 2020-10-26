const insertTrainController = require("../controllers/train_controller");

module.exports = router => {

  router.post('/train', insertTrainController.create);

};