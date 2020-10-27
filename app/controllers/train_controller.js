const Train = require("../models/train_model.js");
const trainService = require("../services/train_service.js");
const TrainStation = require("../models/trainstation_model.js");
class TrainController {

  create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const train = new Train({
      train_number: req.body.train_number,
      train_name: req.body.train_name,
      seats: req.body.seats
    });

    console.log("TrainService.create() called");
    trainService.create(train, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding train"
        });
      else res.send(data);
    });
    const source = new TrainStation({
      train_number : req.body.train_number,
      station_name : req.body.source.station_name,
      arrival_time : req.body.source.arrival_time,
      departure_time : req.body.source.departure_time,
      halt_time : req.body.source.halt_time
    });
    console.log("TrainService.addDestination() called");
    trainService.addDestination(source, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding train"
        });
      // else res.send(data);
    });
    var currStation;
    for (currStation of req.body.stops)
    {
      var dest = new TrainStation({
        train_number : req.body.train_number,
        station_name : currStation.station_name,
        arrival_time : currStation.arrival_time,
        departure_time : currStation.departure_time,
        halt_time : currStation.halt_time
      })
      console.log("TrainService.addDestination() called");
      trainService.addDestination(dest, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while adding train"
          });
        // else res.send(data);
      });
    }
  }

  getTrains = (req, res) => {
    console.log("TrainService.getAll() called");
    trainService.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occured while getting all trains"
        });
      else res.send(data);
    })
  }

}

module.exports = new TrainController();