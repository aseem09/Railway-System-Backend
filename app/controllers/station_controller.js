const Station = require("../models/station_model.js");
const ChangeStation = require("../models/change_station_model.js");
const StationService = require("../services/station_service.js");
const changeStationService = require("../services/changes_station_service.js");
class StationController {

  create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const station = new Station({
      station_name: req.body.station_name,
      city: req.body.city
    });

    console.log("StationService.create() called");
    StationService.create(station, (err, station_data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding station"
        });
      else {
        const change = new ChangeStation({
          admin_id: 1,
          station_name: req.body.station_name,
        });
        changeStationService.create(change, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while adding station"
            });
          else res.send(station_data);
        });
      }
    });
  }

  getStations = (req, res) => {
    console.log("StationService.getStations() called");
    StationService.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occured while getting all stations"
        });
      else res.send(data);
    })
  }

}

module.exports = new StationController();