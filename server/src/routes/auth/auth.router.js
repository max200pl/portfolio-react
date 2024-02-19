const express = require("express");
const authLogInRouter = require("./authLogin.router");
const authLogOutRouter = require("./authLogout.router");
const authSignUpRouter = require("./authSignUp.router");
const authRouter = express.Router();


/**
 * Routes for authentication.
 * @typedef {Object} AuthRoutes
 * @property {"/google"} google - The route for Google authentication.
 * @property {"/github"} github - The route for GitHub authentication.
 * @property {"/form"} form - The route for form-based authentication.
 */
const authRoutes = {
    google: "/google",
    github: "/github",
    form: "/form",
};

authRouter.use("/sign-up", authSignUpRouter);
authRouter.use("/login", authLogInRouter);
authRouter.use("/logout", authLogOutRouter);


module.exports = {
    authRouter,
    authRoutes
};

