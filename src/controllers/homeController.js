const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  editUserById,
  deleteUserById,
} = require("../services/CRUDService");

//GET
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("homepage.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Hello Thành");
};

const getBackend = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

//POST
const postCreateUser = async (req, res) => {
  let { email, uName, city } = req.body;
  await createNewUser(email, uName, city);
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { id, email, uName, city } = req.body;
  await editUserById(email, uName, city, id);
  return res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  getBackend,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
};
