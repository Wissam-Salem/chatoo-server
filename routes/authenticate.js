let express = require("express");
let router = express.Router();
let authenticate = require("../controllers/authenticate");
let auth = require("../middlewares/auth");

router.get("/authenticate", auth, authenticate);
module.exports = router;