const express = require('express');
const { httpGoogleAuth, httpGoogleAuthorization } = require('./auth.controller');
const authRouter = express.Router();
const cookieSession = require('cookie-session');
const { updateUser } = require('../../models/users.model');
require('dotenv').config();


authRouter.use(
    async (req, res, next) => {
        try {
            const codeResponse = req.body;
            const googleResponse = await httpGoogleAuthorization(codeResponse);

            if (googleResponse?.error?.code === 401) {
                res.status(401).json({ message: "Authentication failed" });
                return;
            }

            req.authorizationData = googleResponse.data;

            next();
        } catch (error) {
            console.error("Error during authentication:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
);

authRouter.use(async (req, res, next) => {
    try {
        req.userFromDB = await updateUser(req.authorizationData);
        console.log("Create or update user success:", req.userFromDB);
    } catch (error) {
        console.error("Error during create or update user from DB:", error);
        res.status(500).json({ message: "Internal server error" });
    }

    next()
})

authRouter.use(cookieSession({
    name: 'session', // name of the cookie
    maxAge: 24 * 60 * 60 * 1000, // time live in milliseconds
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2], // key to encrypt
    httpOnly: false,
}), (req, res, next) => {
    try {
        req.session.user = req.userFromDB;
        console.log("Session user:", req.session.user);
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

authRouter.post("/google", httpGoogleAuth);

module.exports = authRouter;