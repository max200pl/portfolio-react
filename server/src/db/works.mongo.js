const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    categoryWork: {
        type: String,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    endWorkTime: {
        type: Date,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    useTechnology: {
        required: true,
        type: [
            {
                applyTech: Number,
                nameTech: String,
            }
        ]
    },
    workName: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Works", workSchema);