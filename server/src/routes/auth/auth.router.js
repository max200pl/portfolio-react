const express = require("express");
const authLogInRouter = require("./authLogin.router");
const authLogOutRouter = require("./authLogout.router");
const authSignUpRouter = require("./authSignUp.router");
const authRouter = express.Router();

authRouter.use("/sign-up", authSignUpRouter);
authRouter.use("/login", authLogInRouter);
authRouter.use("/logout", authLogOutRouter);


module.exports = authRouter;