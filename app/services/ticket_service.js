const sql = require("./db.js");

class TicketService {
    create = (ticket, result) => {
        sql.query("INSERT INTO tickets SET ?", ticket, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...ticket });
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM tickets", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}
module.exports = new TicketService();