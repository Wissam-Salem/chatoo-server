let mongoose = require("mongoose");

let numsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "all"
    },
    nums: [Number]
});

let Nums = mongoose.model("num", numsSchema);
module.exports = Nums;