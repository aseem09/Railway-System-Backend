const Train = require("../models/train_model.js");
const insertTrainService = require("../services/train_service.js");

class insertTrainController {

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

    console.log("insertTrainService.create() called");
    insertTrainService.create(train, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding train"
        });
      else res.send(data);
    });
  }

  getTrains = (req, res) => {
    console.log("insertTrainService.getAll() called");
    insertTrainService.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occured while getting all trains"
        });
      else res.send(data);
    })
  }

}

module.exports = new insertTrainController();