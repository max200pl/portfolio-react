const express = require('express');
const { httpGoogleAuth } = require('./auth.controller');
const authRouter = express.Router();


authRouter.post("/google", httpGoogleAuth);



module.exports = authRouter;