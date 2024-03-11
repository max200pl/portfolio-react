const express = require('express');
const http = require('http');
const app = require("./app.js");
const { mongoConnect } = require('./db/mongo.js');

const PORT = process.env.SERVER_PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    await mongoConnect();

    //* wait load data before starting server;

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer()