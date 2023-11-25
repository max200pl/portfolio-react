const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://max200pl:29121994mO111@cluster0.1evvjy7.mongodb.net/Portfolio?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
    console.log("Mongoose connection established!");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})

async function mongoConnect() {
    console.log(MONGO_URL, "MongoDB connection");
    mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}

