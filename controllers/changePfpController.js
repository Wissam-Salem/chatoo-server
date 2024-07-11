let Users = require("../model/Users");
let changePfpController = async (req, res) => {
    try {
        let { username } = res.locals.user;
        let { url } = req.body;
        let changePfp = await Users.findOneAndUpdate({ username }, { pfp: url });
        let allUsers = await Users.updateMany({ "contacts.name": username }, { $set: { "contacts.$.pfp": url } });
        console.log(allUsers);
        res.json({ success: true, message: "Profile picture has been updated" });
        console.log("Profile picture has been updated");
    } catch (error) {
        res.json({ success: false, message: "Error !" });
        console.log("Error !");
    }
}

module.exports = changePfpController;