let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    pfp: {
        type: String,
        trim: true,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo18QktrggrSHB9m_-NmRjWIUNPdWWxqSJww&s"
    },
    number: {
        type: Number
    },
    contacts: {
        type: [Object]
    }
});

let Users = mongoose.model("user", userSchema);
module.exports = Users;