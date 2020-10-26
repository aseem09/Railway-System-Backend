const Station = require("../models/station_model.js");
const TrainStation = require("../models/trainstation_model.js");
const StationService = require("../services/station_service.js");
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
    StationService.create(station, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding station"
        });
      else res.send(data);
    });
  }
  insertStartPoint = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const startPoint = new TrainStation({
      train_number: req.body.train_number,
      station_name: req.body.station_name
    });

    console.log("StationService.insertStartPoints() called");
    StationService.insertStartPoints(startPoint, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding start point"
        });
      else res.send(data);
    });
  }
  insertDestinationPoint = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const destinationPoint = new TrainStation({
      train_number: req.body.train_number,
      station_name: req.body.station_name
    });

    console.log("StationService.insertDestinationPoints() called");
    StationService.insertDestinationPoints(destinationPoint, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding destination point"
        });
      else res.send(data);
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