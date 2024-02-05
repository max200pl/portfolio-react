const User = require("../db/users.mongo");

async function updateUser(user) {
    try {
        return await User.findOneAndUpdate({
            $or: [
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

module.exports = {
    updateUser,
}