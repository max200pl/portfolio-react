const express = require('express');
const worksRouter = require('./works/works.router');
const { authRouter } = require('./auth/auth.router');
const api = express.Router();

api.use("/works", worksRouter);
api.use("/auth", authRouter);

module.exports = api;
