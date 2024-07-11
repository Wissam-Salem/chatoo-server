let express = require("express");
let router = express.Router();
let userLogoutController = require("../controllers/userLogoutController");
let auth = require("../middlewares/auth");

router.post("/logout", auth, userLogoutController);
module.exports = router;