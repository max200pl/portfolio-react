const express = require("express");
const {
    httpGoogleAuth: httpAuthGoogle,
    httpGoogleAuthorization,
    httpAuthGitHub,
    httpAuthGitHubAuthentication,
    httpAuthGitHubAuthorization,
    httpAuthForm,
    httpAuthFormAuthorization,
    httpFindUser,
} = require("./auth.controller");
const authLogin = express.Router();
const cookieSession = require("cookie-session");
const { httpCreateUser } = require("./authSignUp.controller");
const { updateUser } = require("../../models/users.model");
require("dotenv").config();


//** ---------------- Authorization ----------------------- **//

function authFailed(error) {
    if (error?.code === 401 || error?.code === 404) {
        res.status(401).json({ message: "Authentication failed" });
        return;
    }
}

const authRoutes = {
    google: "/google",
    github: "/github",
    form: "/form",
};

authLogin.use(async (req, res, next) => {
    try {
        let user = null;
        const bodyAuth = req.body;
        const route = req.path;

        if (route === authRoutes.form) {
            console.log(bodyAuth, "bodyAuth")
            const user = await httpFindUser(bodyAuth);

            if (user?.error) {
                authFailed(user.error);
                return;
            }

            if (user === null) {
                return res.status(400).json({ message: "Invalid email address. Please enter a valid email address and try again." });
            }

            req.user = user;

            next();
        }

        if (route === authRoutes.google) {
            const userGoole = await httpGoogleAuthorization(bodyAuth);

            if (userGoole?.error) {
                authFailed(response.error);
                return;
            }

            userEmail = { email: userGoole.email }

            const userFromDb = await httpFindUser(userEmail);

            if (userFromDb === null) {
                user = await httpCreateUser(userGitHub);
                console.log("User DB create:", user);

                if (user?.error) {
                    authFailed(user.error);
                    return;
                }

                req.user = user;
                next();
            } else {
                req.user = userFromDb;
                next();
            }
        }

        if (route === authRoutes.github) {
            const authenticationResponse = await httpAuthGitHubAuthentication(bodyAuth);
            let userGitHub = await httpAuthGitHubAuthorization(authenticationResponse);

            userGitHub = {
                githubId: userGitHub.id,
                name: userGitHub.name,
                avatarUrl: userGitHub.avatar_url,
            }

            // if (user?.error) {
            //     authFailed(user.error);
            //     return;
            // }

            const userFromDb = await httpFindUser(userGitHub);

            if (userFromDb === null) {
                user = await updateUser(userGitHub);
                console.log("User DB create:", userGitHub);

                // if (user?.error) {
                //     authFailed(user.error);
                //     return;
                // }
                req.user = user;
                next();
            } else {
                req.user = userGitHub;
                next();
            }
        }

    } catch (error) {
        console.error("Error during authentication:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


authLogin.use(
    cookieSession({
        name: "session", // name of the cookie
        maxAge: 24 * 60 * 60 * 1000, // time live in milliseconds
        keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2], // key to encrypt
    }),
    (req, res, next) => {
        try {
            req.session.user = req.user;
            console.log("Session user:", req.session.user);
            next();
        } catch (error) {
            res.status(500).json({ message: "Internal server error !!!!!!" });
        }
    }
);

authLogin.post("/google", httpAuthGoogle);
authLogin.post("/github", httpAuthGitHub);
authLogin.post("/form", httpAuthForm);

module.exports = authLogin;
