const sql = require("./db.js");

class StationService {
    create = (newStation, result) => {
        sql.query("INSERT INTO stations SET ?", newStation, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newStation });
        });
    };
    getAll = (result) => {
        sql.query("SELECT * FROM stations", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
    insertStartPoints = (trainStartPoint,result) => {
        sql.query("INSERT INTO trainStartPoints SET ?", trainStartPoint, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...trainStartPoint });
        });
    };
    insertDestinationPoints = (trainDestinationPoint,result) => {
        sql.query("INSERT INTO trainDestinationPoints SET ?", trainDestinationPoint, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...trainDestinationPoint });
        });
    };
}

module.exports = new StationService();