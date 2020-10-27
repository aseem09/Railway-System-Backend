const TrainStation = function (trainStation) {
    this.train_number = trainStation.train_number;
    this.station_name = trainStation.station_name;
    this.arrival_time = trainStation.arrival_time;
    this.departure_time = trainStation.departure_time;
    this.halt_time = trainStation.halt_time;
};

module.exports = TrainStation;