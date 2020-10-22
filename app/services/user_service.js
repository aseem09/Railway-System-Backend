const sql = require("./db.js");
var User = require('../models/user_model')

class UserService {
    create = (newUser, result) => {
        sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newUser });
        });
    };

    getAll = (result) => {
        sql.query("SELECT * FROM users", (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}

module.exports = UserService;