const sql = require("./db.js");

class ChangesTrainService {
    create = (changes_train, result) => {
        sql.query("INSERT INTO changes_train SET ?", changes_train, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { ...changes_train });
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM changes_train", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}
module.exports = new ChangesTrainService();