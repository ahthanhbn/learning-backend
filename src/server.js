// import express from 'express'
const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// app.set("views", "./src/views/");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World! Nodemon");
});

app.get("/abc", (req, res) => {
  res.send("check abc");
});

app.get("/backend", (req, res) => {
  // res.send('check abc')
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
