const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/user", userRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusternodejs.wid3nbe.mongodb.net/myapp?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log("ZDRAVO");
    app.listen(8080);
  })
  .catch((err) => console.log(err));
