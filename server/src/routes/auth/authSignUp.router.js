const express = require("express");
const {
    httpGoogleAuth: httpAuthGoogle,
    httpGoogleAuthorization,
    httpAuthForm,
    httpAuthFormAuthorization: httpAuthenticationUser,
    httpFindUser,
    httpAuthGitHubAuthentication,
    httpAuthGitHubAuthorization,
    httpAuthGitHub,
} = require("./auth.controller");
const cookieSession = require("cookie-session");
const { httpCreateUser } = require("./authSignUp.controller");
const e = require("express");

require("dotenv").config();
const authSignUp = express.Router();

//** ----------------  AUTHENTICATION ----------------------- **//

function authFailed(error) {
    if (error?.code === 401 || error?.code === 404) {
        res.status(401).json({ message: "Authentication failed" });
        return;
    }
}

const authRoutes = {
    google: "/google",
    form: "/form",
    github: "/github",
};


authSignUp.use(async (req, res, next) => {
    try {
        let user = null;
        const bodyAuth = req.body;
        const route = req.path;

        console.log("Auth route:", route);
        console.log("Auth body:", bodyAuth);
        console.log("authRoutes?.form", authRoutes?.form);

        if (route === authRoutes.form) {
            let userFromBD = await httpFindUser(bodyAuth);

            if (userFromBD === null) {
                userFromBD = await httpCreateUser(bodyAuth);
                console.log("User DB create:", userFromBD);

                if (userFromBD?.error) {
                    authFailed(userFromBD.error);
                    return;
                }

                req.user = userFromBD;
                next()
            } else {
                return res.status(409).json({ message: "This email address is already in use." });
            }
        }

        if (route === authRoutes.google) {
            let userGoole = await httpGoogleAuthorization(bodyAuth);

            console.log("Authorization User Goole:", userGoole);

            userGoole = {
                googleId: userGoole.id,
                firstName: userGoole.given_name,
                lastName: userGoole.family_name,
                email: userGoole.email,
                avatarUrl: userGoole.picture,
            }

            const userFromDb = await httpFindUser(userGoole);

            if (userFromDb === null) {
                user = await httpCreateUser(userGoole);
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
            console.log("Auth route:", route);
            const authenticationResponse = await httpAuthGitHubAuthentication(bodyAuth);
            let userGitHub = await httpAuthGitHubAuthorization(authenticationResponse);

            userGitHub = {
                githubId: userGitHub.id,
                name: userGitHub.name,
                avatarUrl: userGitHub.avatar_url,
            }

            const userFromDb = await httpFindUser(userGitHub);

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
    } catch (error) {
        console.error("Error during authentication:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


authSignUp.use( //TODO: move to middleware
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
            res.status(500).json({ message: "Internal server error" });
        }
    }
);

authSignUp.get(authRoutes.github, httpAuthGitHub);
authSignUp.post(authRoutes.google, httpAuthGoogle);
authSignUp.post(authRoutes.form, httpAuthForm);

module.exports = authSignUp;
