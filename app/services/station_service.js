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
}

module.exports = new StationService();