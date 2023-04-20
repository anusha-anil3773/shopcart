const { db } = require("../config/config");
 

const getUserDetails =  (req, res) => {
  try {
    if (req.session.user) {
        res.send({LoggedIn: true, user: req.session.user})
    } else {
        res.send({LoggedIn: false})
    }
} catch (err) {
    console.log(err)
}
}
// const getUserDetails =  (req, res) => {
//   if (req.user) {
//     res.redirect('/')
//   } else {
//     res.render('login');
//   }
// };

const getUserLogout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
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
      if (response) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
        res.redirect('/home')
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
      
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  };

  

module.exports = {
  addUserDetails,
  getUserDetails,
  getUserLogout
};
// const { db } = require("../config/config");

// const getUserDetails = async (req, res) => {
//   if (req.session && req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false });
//   }
// };

// const addUserDetails = async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   try {
//     const result = await db.query(
//       "SELECT * FROM users WHERE username = $1 AND password = $2",
//       [username, password]
//     );

//     if (result.length > 0) {
//       req.session.user = result[0];
//       console.log(req.session.user);
//       res.send(result[0]);
//     } else {
//       res.send({ message: "Wrong username/password combination!" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.send({ err: err });
//   }
// };

// module.exports = {
//   addUserDetails,
//   getUserDetails
// };