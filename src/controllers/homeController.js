const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

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

const postCreateUser = async (req, res) => {
  // console.log("request", req.body);

  //c1
  // let email = req.body.email;
  // let name = req.body.uName;
  // let city = req.body.city;

  //c2 detructing
  let { email, uName, city } = req.body;
  // console.log("🚀 ~ postCreateUser ~ email, uName, city:", email, uName, city);

  //   INSERT INTO Users (email, name, city)
  // VALUES ("thanh@gmail.com", "thanh", "saigon");

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //    VALUES (?, ? ,? )`,
  //   [email, uName, city],
  //   function (err, result) {
  //     res.send("create user success");
  //   }
  // );

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
     VALUES (?, ? ,? )`,
    [email, uName, city]
  );
  console.log("check results", results);
  res.send("create user success");

  // connection.query(
  //   "SELECT * FROM Users u ;",
  //   function (error, results, fields) {
  //     if (error) throw error;
  //     // console.log("🚀 ~ results:", results);
  //   }
  // );

  // const [results, fields] = await connection.query("SELECT * FROM Users u");
  // console.log("first", results);
};

module.exports = {
  getHomepage,
  getABC,
  getBackend,
  postCreateUser,
  getCreatePage,
};
