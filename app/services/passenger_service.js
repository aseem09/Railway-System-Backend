const sql = require("./db.js");

class PassengerService {
    create = (passenger, result) => {
        sql.query("INSERT INTO passengers SET ?", passenger, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...passenger });
        });
    };
    
    getAll = (result) => {
        sql.query("SELECT * FROM passengers", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}
module.exports = new PassengerService();