const sql = require("./db.js");

class AuthenticationService {
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

module.exports = new AuthenticationService();