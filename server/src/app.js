const express = require("express");
const api = require("./routes/api");

const app = express();

app.use(express.json()); // parse all incoming json from the body incoming request
app.use('/', api);

module.exports = app;