const express = require('express');
const worksRouter = require('./works/works.router');

const api = express.Router();

api.use("/works", worksRouter);

module.exports = api;
