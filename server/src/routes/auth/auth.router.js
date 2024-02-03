const express = require("express");
const authLogInRouter = require("./authLogin.router");
const authLogOutRouter = require("./authLogout.router");
const authRouter = express.Router();

authRouter.use("/login", authLogInRouter);
authRouter.use("/logout", authLogOutRouter);


module.exports = authRouter;