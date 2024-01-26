
// https://expressjs.com/en/resources/middleware/cookie-session.html
const cookieSession = require('cookie-session');
const express = require('express')
const axios = require('axios');
const authRouter = express.Router()
require('dotenv').config();
// const { Strategy } = require('passport-google-oauth20');

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
}

const AUTH_OPTIONS = {
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
}

authRouter.use(cookieSession({
    name: 'session', // name of the cookie
    maxAge: 24 * 60 * 60 * 1000, // time live in milliseconds
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2] // key to encrypt
}))

async function getUserInfoGoogle(codeResponse) {
    const response = await axios({
        url: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        method: 'get',
        headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: 'application/json'
        }
    });

    return response.data;
}

async function httpGoogleAuth(req, res, next) {
    const codeResponse = req.body;

    const userInfoResponse = await getUserInfoGoogle(codeResponse);

    if (userInfoResponse?.error?.code === 401) {
        return res.status(401).json({ message: "Authentication failed" });
    }
    //1 добавить в базу данных пользователя если его там нет
    // создать базу данных пользователей
    // добавить в нее пользователя
    //2 добавить в сессию пользователя если его там нет
    //3 вернуть в ответе информацию о пользователе
    res.cookie('cookieName', 'cookieValue', { maxAge: 900000, httpOnly: true });
    console.log(req.session, "req.session");

    return res.status(200).json({ message: "Success Google Auth" });
}

module.exports = {
    httpGoogleAuth
};

// passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// passport.serializeUser((user, done) => { // user - profile
//     done(null, user);
// })

// passport.deserializeUser((user, done) => {
//     done(null, user);
// })

// authRouter.get("/google/callback",
//     passport.authenticate('google', {
//         successRedirect: 'http://localhost:3000',
//         failureRedirect: 'http://localhost:3000/failure',
//         session: true, // save the session  and serialize it to the cookie
//     }),
//     (req, res) => {
//         console.log(req, res);
//         console.log("Google called us back");
//     }
// );

// authRouter.get("/failure", (_req, res) => {
//     console.log("FAILURE!!!");
//     res.send("Failed to authenticate..");
// });