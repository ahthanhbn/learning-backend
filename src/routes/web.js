const {
  getHomepage,
  getABC,
  getBackend,
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

// router.Method('./route', handler)

//get homepage
router.get("/", getHomepage);

// get /abc
router.get("/abc", getABC);

router.get("/backend", getBackend);

module.exports = router; //export default
