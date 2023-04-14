const { db } = require("../config/config");

const getUserDetails = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.send(result);
    console.log(result)
  } catch (err) {
    console.error(err);
    res.send("Error " + err);       
  }
};
  
const addUserDetails = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body)
    try {
      const result = await db.query(
        "SELECT * FROM users WHERE username = $1 AND password = $2",
        [username, password]
      );
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password" });
      }
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  };
  

module.exports = {
  addUserDetails,
  getUserDetails
};
