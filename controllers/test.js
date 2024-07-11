let test = async (req, res) => {
    try {
        res.send("testing");
        console.log("testing");
    } catch (error) {
        res.send("error in testing");
        console.log("error in testing");
    }
}

module.exports = test;