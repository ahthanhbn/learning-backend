const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("homepage.ejs");
};

const getABC = (req, res) => {
  res.send("Hello Thành");
};

const getBackend = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
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

  connection.query(
    `INSERT INTO Users (email, name, city)
     VALUES (?, ? ,? )`,
    [email, uName, city],
    function (err, result) {
      res.send("create user success");
    }
  );
};

module.exports = {
  getHomepage,
  getABC,
  getBackend,
  postCreateUser,
};
