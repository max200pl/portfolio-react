const User = require("../db/users.mongo");

async function updateUser(user) {
    try {
        return await User.findOneAndUpdate({
            googleId: user.id,
        }, {
            $set: {
                googleId: user.id,
                firstName: user.given_name,
                lastName: user.family_name,
                email: user.email,
                avatarUrl: user.picture,
                language: user.locale,
            }
        }, {
            upsert: true, new: true,
            projection: {
                _id: 0,
                __v: 0,
            }
        });
    } catch (err) {
        console.log(`Could not create or update a new User: ${err}`);
    }
}

module.exports = {
    updateUser,
}