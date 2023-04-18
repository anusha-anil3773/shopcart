const express = require("express");
const router = express.Router();
const { getUserDetails,addUserDetails } = require("../controllers/user");

router.get("/get", getUserDetails);
router.post("/login", addUserDetails);

module.exports = router;
