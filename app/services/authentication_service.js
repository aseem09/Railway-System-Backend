const sql = require("./db.js");

class AuthenticationService {
    getUserFromId = (user_name, password, result) => {
        sql.query("SELECT * FROM users WHERE user_name = ? AND password = ?", user_name, password, (err, res) => {
            if (err) {
                console.log("Error " + err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    };
}

module.exports = AuthenticationService;