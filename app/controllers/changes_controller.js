const changeTrainService = require("../services/changes_train_service.js");
const changeStationService = require("../services/changes_station_service.js");

class ChangesController {

    getTrainChanges = (req, res) => {
        console.log("ChangeService.getTrains() called");
        changeTrainService.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User"
                });
            else res.send(data);
        })
    }

    getStationChanges = (req, res) => {
        console.log("ChangeService.getStations() called");
        changeStationService.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User"
                });
            else res.send(data);
        })
    }

}

module.exports = new ChangesController();