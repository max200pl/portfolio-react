const workSchema = require("../db/works.mongo");
const technologiesSchema = require("../db/technologies.mongo");

async function createWork(work) {
    try {
        const result = await workSchema.create(work);
        console.log("Work created in database");
        return result;
    } catch (err) {
        console.log(`Could not save work ${err}`);
    }
}

async function updateWork(work) {
    try {
        const result = await workSchema.updateOne(
            { _id: work._id },
            { $set: work },
        );
        console.log("Work updated in database");
        return result;
    } catch (err) {
        console.log(`Could not updated work ${err}`);
    }
}

async function getAllWorks() {
    return await workSchema.find(
        {},
        {
            __v: 0,
        }
    );
}

async function getGetFilterWorks(category) {
    return await workSchema.find(
        { category: category }, // which fields are included in the response
        {
            _id: 0,
            __v: 0,
        }
    );
}

async function getAllCategories() {
    return await workSchema.find({}, { category: 1, _id: 0 });
}

async function getTechnologies() {
    return await technologiesSchema.find(
        {},
        {
            _id: 0,
            String: 0,
        }
    );
}

module.exports = {
    getAllWorks,
    createWork,
    updateWork,
    getAllCategories,
    getGetFilterWorks,
    getTechnologies,
};
