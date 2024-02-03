
const axios = require('axios');


async function httpGoogleAuthorization(codeResponse) {
    const response = await axios({
        url: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        method: 'get',
        headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: 'application/json'
        }
    });

    return response;
}

async function httpGoogleAuth(req, res, next) {
    return res.status(200).json({ message: "Success Google Auth", user: req.session.user });
}


module.exports = {
    httpGoogleAuth,
    httpGoogleAuthorization,
};
