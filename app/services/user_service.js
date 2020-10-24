const sql = require("./db.js");

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

    getUserFromId = (user, result) => {
        sql.query('SELECT * FROM users WHERE user_name = ? AND user_password = ?;', [user.user_name, user.user_password], (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            console.log(res);
            result(null, res);
        });
    };
    
}

module.exports = new UserService();