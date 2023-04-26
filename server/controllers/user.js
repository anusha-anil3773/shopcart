const { db } = require("../config/config");

const getUserDetails = (req, res) => {
  try {
    if (req.session.user) {
      res.send({ LoggedIn: true, user: req.session.user });
    } else {
      res.send({ LoggedIn: false });
    }
  } catch (err) {
    console.log(err);
  }
};

const getUserLogout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};

const addUserDetails = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    try {
      const result = await db.query(
        "SELECT * FROM users WHERE username = $1 AND password = $2",
        [username, password]
      );
  
      if (result.length > 0) {
        req.session.user = result[0];
        console.log(req.session.user);
        res.send(result[0]);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    } catch (err) {
      console.error(err);
      res.send({ err: err });
    }
  };

module.exports = {
  addUserDetails,
  getUserDetails,
  getUserLogout,
};
