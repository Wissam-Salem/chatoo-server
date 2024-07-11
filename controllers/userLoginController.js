let Users = require("../model/Users");
let jwt = require("jsonwebtoken");
require("dotenv").config();
let bcrypt = require("bcrypt");
let createToken = (email) => {
    return jwt.sign({ email }, process.env.SECRET_KEY, {
        expiresIn: "2d"
    });
}

let userLoginController = async (req, res) => {
    try {
        let { email, password } = req.body;
        if ((email === undefined || password === undefined) || (email === "" || password === "")) {
            console.log("All fields are required !");
            res.json({ success: false, message: "All fields are required !" });
        } else {
            let findUser = await Users.findOne({ email });
            if (findUser) {
                let comparePassword = await bcrypt.compare(password, findUser.password);
                let token = createToken(findUser.email);
                if (comparePassword) {
                    console.log("User logged in successfully");
                    res.cookie("AUTH", token, {
                        maxAge: 50000000
                    })
                    res.json({ success: true, message: "User logged in successfully" });
                } else {
                    res.json({ success: false, message: "Wrong email or password !" });
                }
            } else {
                res.json({ success: false, message: "Wrong email or password !" });
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error !" });
    }
}

module.exports = userLoginController;