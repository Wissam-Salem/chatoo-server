let Users = require("../model/Users");
let addContactController = async (req, res) => {
    try {
        let { username } = res.locals.user;
        let { name } = req.body;
        let findContact = await Users.findOne({ username: name });
        if (findContact) {
            let contact = {
                name: findContact.username,
                number: findContact.number,
                pfp: findContact.pfp
            }
            let userAsContact = {
                name: res.locals.user.username,
                pfp: res.locals.user.pfp,
                number: res.locals.user.number
            }
            let isExists = res.locals.user.contacts.map((c) => {
                return c.name === findContact.username
            });
            let User2IsExists = findContact.contacts.map((c2) => {
                return c2.name === username
            })
            console.log(isExists);
            if (isExists.length > 0 && User2IsExists.length > 0) {
                res.json({ success: false, message: "Contact already saved !" });
                console.log("Contact already saved !");
            } else {
                let addContact = await Users.findOneAndUpdate({ username }, { $push: { contacts: contact } });
                let addUserToContact = await Users.findOneAndUpdate({ username: findContact.username }, { $push: { contacts: userAsContact } })
                res.json({ success: true, message: "Contact has been saved" });
                console.log("Contact has been saved");
            }
        } else {
            res.json({ success: false, message: "Contact not exists !" });
            console.log("Contact not exists !");
        }
    } catch (error) {
        res.json({ success: false, message: "Error !" });
        console.log("Error !");
    }
}

module.exports = addContactController;