// import express from 'express'
require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config temple engine
configViewEngine(app);

//điều hướng
app.use("/", webRoutes);

//test connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //default: 3306
  user: "root",
  password: "123456",
  database: "hoidanit",
});

connection.connect();

connection.query("SELECT * FROM Users u ;", function (error, results, fields) {
  if (error) throw error;
  console.log("🚀 ~ results:", results);
  console.log("🚀 ~ fields:", fields);
});

connection.end();

// cách viết sau để chia api version
// app.use("/test", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
