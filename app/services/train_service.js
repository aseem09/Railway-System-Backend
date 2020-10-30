const sql = require("./db.js");

class TrainService {
    create = (newTrain, result) => {
        sql.query("INSERT INTO trains SET ?", newTrain, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newTrain });
        });
    };

    addDestination = (newDest, result) => {
        sql.query("INSERT INTO destinations SET ?", newDest, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null);
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM trains", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
    getSearchResults = (searchQuery,result)=> {
        sql.query("SELECT source.train_number as train_number , source.arrival_time as start_arrival_time, source.departure_time as start_departure_time, dest.arrival_time as stop_arrival_time, dest.departure_time as stop_departure_time\
        FROM \
        (SELECT *\
        FROM destinations \
        WHERE train_number \
        IN (SELECT train_number \
            FROM destinations \
            WHERE destinations.station_name \
            IN (?,?) \
            GROUP BY train_number \
            HAVING COUNT(DISTINCT station_name) = 2) AND station_name = ?) as source INNER JOIN\
        (SELECT *\
        FROM destinations \
        WHERE train_number \
        IN (SELECT train_number \
            FROM destinations \
            WHERE destinations.station_name \
            IN (?,?) \
            GROUP BY train_number \
            HAVING COUNT(DISTINCT station_name) = 2) AND station_name = ?) as dest on source.train_number = dest.train_number;",[searchQuery.start, searchQuery.stop, searchQuery.start,searchQuery.start, searchQuery.stop, searchQuery.stop], (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            console.log(res);
            result(null, res);
        });
    };
}

module.exports = new TrainService();