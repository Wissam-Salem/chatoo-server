let express = require("express");
let router = express.Router();
let addContactController = require("../controllers/addContactController");
let auth = require("../middlewares/auth");

router.post("/add-contact", auth, addContactController);
module.exports = router;