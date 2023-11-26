const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    name: {
        required: true,
        type: String
    },
    technology: {
        required: true,
        type: [
            {
                apply: Number,
                name: String,
            }
        ]
    },
})

module.exports = mongoose.model("Works", workSchema);