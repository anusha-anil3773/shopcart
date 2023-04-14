const express = require("express");
const router = express.Router();
const { getUserDetails,addUserDetails } = require("../controllers/user");

router.get("/get", getUserDetails);
router.post("/add", addUserDetails);

module.exports = router;
