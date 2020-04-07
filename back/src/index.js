const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const createServer = require("http").createServer;

dotenv.config();

// const sqlite3 = require("sqlite3").verbose();

// const createRoutes = require("./core/routes");
// const createSocket = require("./core/socket");

// mongoose = require("mongoose");

// mongoose.connect(process.env.DB, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

const app = express();
const http = createServer(app);

const DBConnect = require("./core/db");
const db = new DBConnect("./sqlite.db");

const UserController = require("./controllers/UserController");
const UserStatController = require("./controllers/UserStatController");

const UserCtrl = new UserController(db);
const UserStatCrtl = new UserStatController(db);

app.use(cors());
app.use(bodyParser.json());
app.post("/users", UserCtrl.getUsers.bind(UserCtrl));
app.get("/users_count", UserCtrl.getUsersCount.bind(UserCtrl));
app.post("/user_name", UserCtrl.getUserName.bind(UserCtrl));
app.post("/user_statistic", UserStatCrtl.getUserStatistic.bind(UserStatCrtl));

// userController.create
// createRoutes(app, io);

http.listen(process.env.PORT || 3001, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
