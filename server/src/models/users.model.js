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
 * @param {{email?: string, googleId?: string, githubId?: string}} user
 * @returns {Promise<object>}
 */
async function findUser(user) {
    try {
        return await User.findOne(
            {
                $or: [
                    { email: user.email },
                    { githubId: user.githubId },
                ],
            },
            {
                projection: {
                    _id: 0,
                    __v: 0,
                }
            });
    } catch (err) {
        console.log(`Could not fined a new User: ${err}`);
    }
}

/**
 * @description create a new user
 * @param {Object} user
 * @returns {Promise<object>}
 */
async function createUser(user) {
    try {
        return await User.create(user);
    } catch (err) {
        console.log(`Could not create a new User: ${err}`);
    }
}


module.exports = {
    updateUser,
    findUser,
    createUser,
}