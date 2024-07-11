let Users = require("../model/Users");

let authenticate = async (req, res) => {
    try {
        res.json({ success: true, user: res.locals.user, message: "User is authenticated" });
        console.log("User is authenticated");
    } catch (error) {
        res.json({ success: false, message: "error in authentication !" });
        console.log("error in authentication !");
    }
}

module.exports = authenticate;