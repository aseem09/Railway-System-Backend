const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
var cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(router);

require("./app/routes/user_routes.js")(router);
require("./app/routes/authentication_routes.js")(router);
require("./app/routes/train_routes.js")(router);
require("./app/routes/passenger_routes.js")(router);
require("./app/routes/booking_routes.js")(router);
require("./app/routes/station_routes.js")(router);
require("./app/routes/passenger_routes.js")(router);
require("./app/routes/booking_routes.js")(router);
require("./app/routes/ticket_routes.js")(router);
require("./app/routes/admin_routes.js")(router);
require("./app/routes/changes_routes.js")(router);
require("./app/routes/search_routes.js")(router);

app.get("/", (req, res) => {
  res.json({ message: "Railway System" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});