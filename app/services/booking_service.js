const sql = require("./db.js");

class BookingService {
    create = (booking, result) => {
        sql.query("INSERT INTO bookings SET ?", booking, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { ...booking });
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM bookings", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}
module.exports = new BookingService();