const express = require("express");
const {
    httpGoogleAuth: httpAuthGoogle,
    httpGoogleAuthorization,
    httpAuthGitHub,
    httpAuthGitHubAuthentication,
    httpAuthGitHubAuthorization,
    httpAuthForm,
    httpAuthFormAuthorization,
} = require("./auth.controller");
const authLogin = express.Router();
const cookieSession = require("cookie-session");
const { updateUser } = require("../../models/users.model");
const { authRoutes } = require("./auth.router");
require("dotenv").config();


//** ---------------- Authorization ----------------------- **//

function authFailed(error) {
    if (error?.code === 401 || error?.code === 404) {
        res.status(401).json({ message: "Authentication failed" });
        return;
    }
}

authLogin.use(async (req, res, next) => {
    try {
        let user = null;
        const bodyAuth = req.body;
        const route = req.path;

        if (route === authRoutes.form) {
            console.log(bodyAuth, "bodyAuth")

            const response = await httpAuthFormAuthorization(bodyAuth);

            if (response?.error) {
                authFailed(response.error);
                return;
            }

            user = {
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                avatarUrl: response.avatarUrl,
            };
        }

        if (route === authRoutes.google) {
            const userGoole = await httpGoogleAuthorization(bodyAuth);

            user = {
                googleId: userGoole.id,
                firstName: userGoole.given_name,
                lastName: userGoole.family_name,
                email: userGoole.email,
                avatarUrl: userGoole.picture,
            }
        }

        if (route === authRoutes.github) {
            console.log(bodyAuth, "bodyAuth")
            const authenticationResponse = await httpAuthGitHubAuthentication(bodyAuth);
            const userGitHub = await httpAuthGitHubAuthorization(authenticationResponse);

            user = {
                githubId: userGitHub.id,
                name: userGitHub.name,
                avatarUrl: userGitHub.avatar_url,
            }
        }



        console.log("Auth user info:", user);

        req.authorizationData = user;

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
authLogin.post("/form", httpAuthForm);

module.exports = authLogin;
