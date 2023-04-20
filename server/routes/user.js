const express = require("express");
const router = express.Router();
const { getUserDetails,addUserDetails,getUserLogout } = require("../controllers/user");

router.get("/login", getUserDetails);
router.post("/login", addUserDetails);
router.post("/", getUserLogout);

module.exports = router;
