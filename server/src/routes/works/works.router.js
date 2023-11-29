const express = require('express');
const { httpGetAllWorks, httpGetImagesWork } = require("./works.controller");

const worksRouter = express.Router();

worksRouter.get('/', httpGetAllWorks);
worksRouter.get('/image', httpGetImagesWork);

module.exports = worksRouter;