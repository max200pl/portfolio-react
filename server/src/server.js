const express = require('express');
const http = require('http');
const app = require("./app.js");
const { mongoConnect } = require('./db/mongo.js');
const { loadWorks, updateLocalWorks } = require('./models/works.model.js');
const createImageJson = require('./utils/images.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();

    //* wait load data before starting server;
    // await createImageJson();
    await updateLocalWorks()
    await loadWorks();

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer()