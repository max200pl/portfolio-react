const express = require('express');
const { httpGetAllWorks, httpGetImagesWork, httpGetCategoriesWorks } = require("./works.controller");

const worksRouter = express.Router();

worksRouter.get('/', httpGetAllWorks);

worksRouter.get('/image', httpGetImagesWork);
worksRouter.get('/categories', httpGetCategoriesWorks);

module.exports = worksRouter;