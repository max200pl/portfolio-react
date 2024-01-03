const express = require('express');
const { httpGetAllWorks, httpGetImagesWork, httpGetCategoriesWorks, httpCreatedWork: httpCreateWork, httpGetTechnologies, httpUpdatedWork, httpDeleteWork } = require("./works.controller");
const worksRouter = express.Router();
const upload = require('../../config/multerConfig');

worksRouter.get('/', httpGetAllWorks);
worksRouter.delete('/delete', httpDeleteWork);
worksRouter.post('/create', upload.single('image'), httpCreateWork);
worksRouter.put('/update', upload.single('image'), httpUpdatedWork);
worksRouter.get('/image', httpGetImagesWork);
worksRouter.get('/categories', httpGetCategoriesWorks);
worksRouter.get('/technologies', httpGetTechnologies);

module.exports = worksRouter;