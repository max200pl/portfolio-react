const express = require('express');
const { httpGetAllWorks } = require("./works.controller");

const worksRouter = express.Router();

worksRouter.get('/', httpGetAllWorks);

module.exports = worksRouter;