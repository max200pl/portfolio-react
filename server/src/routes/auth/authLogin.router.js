const express = require("express");
const {
    httpGoogleAuth: httpAuthGoogle,
    httpGoogleAuthorization,
    httpAuthGitHub,
    httpAuthGitHubAuthentication,
    httpAuthGitHubAuthorization,
} = require("./auth.controller");
const authLogin = express.Router();
const cookieSession = require("cookie-session");
const { updateUser } = require("../../models/users.model");
require("dotenv").config();

const authRoutes = {
    google: "/google",
    github: "/github",
    form: "/form",
    logout: "/logout",
};


authLogin.use(async (req, res, next) => {
    try {
        let authResponse = null;
        const codeResponse = req.body;
        const route = req.path;

        if (route === authRoutes.google) {
            const authGooleResponse = await httpGoogleAuthorization(codeResponse);

            authResponse = authGooleResponse.data;
        }

        if (route === authRoutes.github) {
            console.log(codeResponse, "codeResponse")
            const authenticationResponse = await httpAuthGitHubAuthentication(codeResponse);

            authResponse = await httpAuthGitHubAuthorization(authenticationResponse);
        }

        if (authResponse?.error?.code === 401 || authResponse?.error?.code === 404) {
            res.status(401).json({ message: "Authentication failed" });
            return;
        }

        req.authorizationData = authResponse;

        next();
    } catch (error) {
        console.error("Error during authentication:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

authLogin.use(async (req, res, next) => {
    try {
        req.userFromDB = await updateUser(req.authorizationData);
        console.log("Create or update user success:", req.userFromDB);
    } catch (error) {
        console.error("Error during create or update user from DB:", error);
        res.status(500).json({ message: "Internal server error" });
    }

    next();
});

authLogin.use(
    cookieSession({
        name: "session", // name of the cookie
        maxAge: 24 * 60 * 60 * 1000, // time live in milliseconds
        keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2], // key to encrypt
    }),
    (req, res, next) => {
        try {
            req.session.user = req.userFromDB;
            console.log("Session user:", req.session.user);
            next();
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
);

authLogin.post("/google", httpAuthGoogle);
authLogin.post("/github", httpAuthGitHub);
// authLogin.post("/form", httpAuthGoogle);

module.exports = authLogin;
