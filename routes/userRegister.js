let express = require("express");
let router = express.Router();
let userRegisterController = require("../controllers/userRegisterController");

router.post("/register", userRegisterController);
module.exports = router;