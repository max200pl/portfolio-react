const express = require('express');
const { httpGetAllWorks, httpGetImagesWork, httpGetCategoriesWorks, httpCreatedWork, httpGetTechnologies } = require("./works.controller");
const worksRouter = express.Router();
const upload = require('../../config/multerConfig');

worksRouter.get('/', httpGetAllWorks);
worksRouter.post('/', upload.single('image'), httpCreatedWork);
worksRouter.get('/image', httpGetImagesWork);
worksRouter.get('/categories', httpGetCategoriesWorks);
worksRouter.get('/technologies', httpGetTechnologies);

module.exports = worksRouter;