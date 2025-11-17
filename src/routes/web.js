const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World! Nodemon");
});

router.get("/abc", (req, res) => {
  res.send("check abc");
});

router.get("/backend", (req, res) => {
  // res.send('check abc')
  res.render("sample.ejs");
});


module.exports = router; //export default