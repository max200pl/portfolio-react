const mongoose = require("mongoose");

const technologiesSchema = new mongoose.Schema({
    backend: [{}],
    frontend: [{}],
})

module.exports = mongoose.model("technologies", technologiesSchema);
