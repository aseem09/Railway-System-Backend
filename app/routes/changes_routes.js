const controller = require("../controllers/changes_controller.js");

module.exports = router => {

    router.get('/changes_train', controller.getTrainChanges);
    router.get('/changes_station', controller.getStationChanges);

};