const insertTrainController = require("../controllers/insertTrain_controller");

module.exports = router => {

  router.post('/insertTrain', insertTrainController.create);
//   router.get('/users', trainController.getTrains);

};