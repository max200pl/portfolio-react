const express = require("express");
const cors = require('cors');
const api = require("./routes/api");
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse all incoming json from the body incoming request
app.use('/', api);

module.exports = app;