const sql = require("./db.js");

class AdminService {
    create = (newAdmin, result) => {
        sql.query("INSERT INTO admins SET ?", newAdmin, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newAdmin });
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM admins", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };

}

module.exports = new AdminService();