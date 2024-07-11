let Users = require("../model/Users");
let getContactController = async (req, res) => {
    try {
        let { username } = req.body;
        let findUser = await Users.findOne({ username });
        res.json({ success: true, number: findUser.number, pfp: findUser.pfp });
    } catch (error) {
        res.json({ success: false });
    }
}

module.exports = getContactController;