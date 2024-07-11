let express = require("express");
let router = express.Router();
let getContactController = require("../controllers/getContactController");
let auth = require("../middlewares/auth");

router.post("/get-contact", auth, getContactController);
module.exports = router;