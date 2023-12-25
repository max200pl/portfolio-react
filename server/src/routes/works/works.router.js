const express = require('express');
const { httpGetAllWorks, httpGetImagesWork, httpGetCategoriesWorks, httpCreatedWork: httpSavedWork, httpGetTechnologies } = require("./works.controller");
const worksRouter = express.Router();
const upload = require('../../config/multerConfig');

worksRouter.get('/', httpGetAllWorks);
worksRouter.post('/create', upload.single('image'), httpSavedWork);
worksRouter.put('/update/:id', upload.single('image'), httpSavedWork);
worksRouter.get('/image', httpGetImagesWork);
worksRouter.get('/categories', httpGetCategoriesWorks);
worksRouter.get('/technologies', httpGetTechnologies);

module.exports = worksRouter;