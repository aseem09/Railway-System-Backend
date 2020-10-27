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
            result(null, { id: res.insertId, ...newDest });
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
}

module.exports = new TrainService();