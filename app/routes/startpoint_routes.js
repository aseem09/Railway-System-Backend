const stationController = require("../controllers/station_controller.js");

module.exports = router => {

  router.post('/startpoint',stationController.insertStartPoint );

};