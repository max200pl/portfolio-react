const express = require('express');
const http = require('http');
const app = require("./app.js");
const { mongoConnect } = require('./db/mongo.js');
const createImageJson = require('./utils/images.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();

    //* wait load data before starting server;

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer()