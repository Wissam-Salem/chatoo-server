let express = require("express");
let router = express.Router();
let auth = require("../middlewares/auth");
let changePfpController = require("../controllers/changePfpController");

router.patch("/change-pfp", auth, changePfpController);
module.exports = router;