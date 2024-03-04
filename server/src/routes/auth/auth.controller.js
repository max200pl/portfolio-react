
const axios = require('axios');
const { findUser } = require('../../models/users.model');
require("dotenv").config();

/**
 * @param {{email: string, googleId: string, githubId: string}} user
 */
async function httpFindUser(user) {
    try {
        return await findUser(user);
    } catch (error) {
        return error;
    }
}

async function httpGoogleAuthorization(codeResponse) {
    const response = await axios({
        url: "https://www.googleapis.com/oauth2/v1/userinfo",
        method: 'get',
        arguments: { access_token: codeResponse.access_token },
        headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: 'application/json'
        }
    });

    return response.data;
}

async function httpAuthGitHubAuthentication(codeResponse) {
    try {
        const response = await axios({
            url: "https://github.com/login/oauth/access_token",
            method: 'post',
            data: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code: codeResponse.code,
            },
            headers: {
                Authorization: `Bearer ${codeResponse.code}`,
                Accept: 'application/json'
            }
        });

        console.info("Step ONE response httpAuthGitHub", response.statusText);

        return response.data;
    } catch (error) {
        console.error("Step ONE Error during authentication:", error);
        return error;
    }
}

async function httpAuthGitHubAuthorization(codeResponse) {
    console.log("Step TWO codeResponse", codeResponse);

    const response = await axios({
        url: "https://api.github.com/user",
        method: 'get',
        headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
        }
    });

    console.log("Step TWO response USER INFO  httpAuthGitHub", response.data);

    return response.data;
}


async function httpGoogleAuth(req, res, next) {
    return res.status(200).json({ message: "Success Google Auth", user: req.session.user });
}

async function httpAuthGitHub(req, res, next) {
    return res.status(200).json({ message: "Success GitHub Auth", user: req.session.user });
}

async function httpAuthForm(req, res, next) {
    return res.status(200).json({ message: "Success Form Auth", user: req.session.user });
}

module.exports = {
    httpGoogleAuth,
    httpAuthGitHub,
    httpAuthForm,
    httpFindUser,
    httpGoogleAuthorization,
    httpAuthGitHubAuthorization,
    httpAuthGitHubAuthentication
};
