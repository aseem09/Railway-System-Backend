const passengerController = require("../controllers/passenger_controller.js");

module.exports = router => {

  router.post('/passenger', passengerController.create);

  router.get('/passengers', passengerController.getPassengers);

};