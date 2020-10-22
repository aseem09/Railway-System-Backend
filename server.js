const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const routes = require('./app/routes');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

routes(router);

// require("./app/routes/user_routes.js")(router);
// require("./app/routes/authentication_routes.js")(router);

// app.get("/", (req, res) => {
//   res.json({ message: "Railway System" });
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});