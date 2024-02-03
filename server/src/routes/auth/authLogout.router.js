const authLogOut = require("express").Router();

authLogOut.use((req, res, next) => {
    req.session = null;
    next();
});

authLogOut.post("/", (req, res) => {
    res.status(200).json({ message: "Logout success" });
});

module.exports = authLogOut;
