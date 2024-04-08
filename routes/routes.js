const express = require("express");
const { email } = require("../controller/sendMail");


const router = express.Router();

router.route("/email").post(email)




module.exports = router;