// import express from 'express'
require("dotenv").config({ silent: true });
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config temple engine
configViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//điều hướng
app.use("/", webRoutes);

// //select database
// connection.connect();
// connection.query("SELECT * FROM Users u ;", function (error, results, fields) {
//   if (error) throw error;
//   // console.log("🚀 ~ results:", results);
// });

// connection.end();

// cách viết sau để chia api version
// app.use("/test", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
