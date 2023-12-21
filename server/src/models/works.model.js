const workSchema = require("../db/works.mongo");
const technologiesSchema = require("../db/technologies.mongo");

async function saveWork(work) {
    try {
        // create or update work in DB
        const result = await workSchema.updateOne(
            { name: work.name }, // create
            work, // update if it does in already exist
            {
                upsert: true,
            }
        );
        console.log("Work saved in database");
        return result;
    } catch (err) {
        console.log(`Could not save work ${err}`);
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
    saveWork,
    getAllCategories,
    getGetFilterWorks,
    getTechnologies,
};
