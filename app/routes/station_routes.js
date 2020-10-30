const stationController = require("../controllers/station_controller.js");

module.exports = router => {

  router.post('/station',stationController.create);

  router.get('/station', stationController.getStations);

};