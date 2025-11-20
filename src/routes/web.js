const {
  getHomepage,
  getABC,
  getBackend,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

// router.Method('./route', handler)

//get homepage
router.get("/", getHomepage);
// get /abc
router.get("/abc", getABC);

router.get("/backend", getBackend);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router; //export default
