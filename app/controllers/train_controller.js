const Train = require("../models/train_model.js");
const ChangeTrain = require("../models/change_train_model.js");
const trainService = require("../services/train_service.js");
const TrainStation = require("../models/trainstation_model.js");
const changeTrainService = require("../services/changes_train_service.js");

const SearchQuery = require("../models/search_model.js");
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

    var json = train;

    console.log("TrainService.create() called");
    trainService.create(train, (err, train_data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding train"
        });
      else {
        json = train_data;
        console.log("Successfully added train");
      }
    });
    const source = new TrainStation({
      train_number: req.body.train_number,
      station_name: req.body.source.station_name,
      arrival_time: req.body.source.arrival_time,
      departure_time: req.body.source.departure_time,
      halt_time: req.body.source.halt_time
    });
    console.log("TrainService.addDestination() called");
    trainService.addDestination(source, (err) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding train"
        });
      else console.log("Source successfully added");
    });
    var currStation;
    for (currStation of req.body.stops) {

      var dest = new TrainStation({
        train_number: req.body.train_number,
        station_name: currStation.station_name,
        arrival_time: currStation.arrival_time,
        departure_time: currStation.departure_time,
        halt_time: currStation.halt_time
      })
      console.log("TrainService.addDestination() called");
      trainService.addDestination(dest, (err) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while adding train"
          });
        else console.log("Destination successfully added");
      });
    }

    const change = new ChangeTrain({
      admin_id: 1,
      train_number: req.body.train_number,
    });

    changeTrainService.create(change, (err) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding train"
        });
      else res.send(json);
    });
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
  getSearchResults = (req, res) => {
    console.log(req.body)
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

    const searchQuery = new SearchQuery({
      start: req.body.start,
      stop: req.body.stop
    });

    
    console.log("TrainService.getSearchResults() called");
    trainService.getSearchResults(searchQuery, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding station"
        });
      }
      else {
        let json = [];
        for (let i = 0; i < data.length; i++) {
          let train = data[i];
          trainService.getTrainFromId(train.train_number, (err, train_data) => {
            if (err) {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while adding station"
              });
            }
            else {
              const obj = {
                train_name: train_data[0].train_name,
                cost: 100 + Math.floor(Math.random() * (1000 - 100 + 1)),
                ...train
              };
              json.push(obj);
              if (json.length == data.length) {
                res.send(json)
              }
            }
          });
        }
      }
    });
  }
}

module.exports = new TrainController();