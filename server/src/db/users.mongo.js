const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        sparse: true,
        unique: true
    },
    password: {
        type: String,
    },
    avatarUrl: {
        type: String
    },
    googleId: {
        type: String,
    },
    githubId: {
        type: String,
    },
});

const User = mongoose.model('Users', UserSchema);

module.exports = User
