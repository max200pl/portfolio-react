const { createUser } = require("../../models/users.model");

async function httpCreateUser(user) {
    if (user === null) {
        return { error: { code: 404, message: "User not found" } };
    }

    const newUser = {
        email: user.email ?? "",
        googleId: user.googleId ?? "",
        githubId: user.githubId ?? "",
        ...user,
    };

    try {
        return await createUser(newUser);
    } catch (error) {
        console.error("Error during user creation:", error);
        return error;
    }
}


module.exports = {
    httpCreateUser,
}