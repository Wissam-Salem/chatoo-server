let mongoose = require("mongoose");
require("dotenv").config();

let connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("DB CONNECTED");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;