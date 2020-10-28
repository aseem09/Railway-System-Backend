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
        sql.query("SELECT train_number, arrival_time, departure_time, halt_time FROM destinations WHERE train_number IN (SELECT train_number FROM destinations WHERE destinations.station_name IN (?,?) GROUP BY train_number HAVING COUNT(DISTINCT station_name) = 2) AND station_name = ?;",[searchQuery.start, searchQuery.stop, searchQuery.start], (err, res) => {
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