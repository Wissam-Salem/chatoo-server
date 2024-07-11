let express = require("express");
let router = express.Router();
let userLoginController = require("../controllers/userLoginController");

router.post("/login", userLoginController);
module.exports = router;