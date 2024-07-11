let userLogoutController = async (req, res) => {
    try {
        res.cookie("AUTH", "", {
            maxAge: 1
        });
        res.json({ success: true });
        console.log("User logged out");
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}

module.exports = userLogoutController;