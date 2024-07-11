let Users = require("../model/Users");
let jwt = require("jsonwebtoken");
require("dotenv").config();


let auth = async (req, res, next) => {
    try {
        let token = req.cookies.AUTH;
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, async (error, decodedToken) => {
                if (error) {
                    var error = new Error("Error !");
                    res.json({ success: false, message: "Error !" });
                    next(error);
                } else {
                    let { email } = decodedToken;
                    let findUser = await Users.findOne({ email });
                    res.locals.user = findUser;
                    next();
                }
            })
        } else {
            var error = new Error("Token is missing !");
            res.json({ success: false, message: "Token is missing !" });
            next(error);
        }
    } catch (error) {
        var error = new Error("Catched an error !");
        res.json({ success: false, message: "Catched an error !" });
        next(error);
    }
}

module.exports = auth;