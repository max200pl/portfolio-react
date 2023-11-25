const express = require('express');
const http = require('http');
const app = require("./app.js");
const { mongoConnect } = require('./db/mongo.js');
const { loadWorks } = require('./models/works.model.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();

    //* wait load data before starting server;

    await loadWorks();

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer()