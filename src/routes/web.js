const {
  getHomepage,
  getABC,
  getBackend,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleDeleteUser
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

// router.Method('./route', handler)

//GET
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/backend", getBackend);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

//POST
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleDeleteUser);
router.post("/create-user", postCreateUser);

module.exports = router; //export default
