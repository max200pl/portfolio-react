const express = require('express');
const http = require('http');
const app = express("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer()