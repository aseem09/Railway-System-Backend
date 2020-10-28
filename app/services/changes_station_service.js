const sql = require("./db.js");

class ChangesStationService {
    create = (changes_station, result) => {
        sql.query("INSERT INTO changes_station SET ?", changes_station, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { ...changes_station });
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM changes_station", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}
module.exports = new ChangesStationService();