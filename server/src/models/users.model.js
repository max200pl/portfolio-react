const User = require("../db/users.mongo");

async function updateUser(user) {
    try {
        return await User.findOneAndUpdate({
            $or: [
                { email: user.email },
                { googleId: user.googleId },
                { githubId: user.githubId }
            ]
        }, {
            $set: { ...user }
        }, {
            upsert: true, new: true,
            projection: {
                _id: 0,
                __v: 0,
            }
        });
    } catch (err) {
        console.log(`Could not create a new User: ${err}`);
    }
}

/**
 * @param {string} email
 * @returns {Promise<object>}
 */
async function findUser(email) {
    try {
        return await User.findOne({
            email
        }, {
            projection: {
                _id: 0,
                __v: 0,
            }
        });
    } catch (err) {
        console.log(`Could not fined a new User: ${err}`);
    }
}


module.exports = {
    updateUser,
    findUser,
}