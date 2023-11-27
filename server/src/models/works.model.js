const { readFile } = require("node:fs/promises");
const { join } = require("node:path");
const workSchema = require("../db/works.mongo");

async function saveWork(work) {
    try {
        // create or update work in DB
        await workSchema.updateOne(
            { name: work.name }, // create
            work, // update if it does in already exist
            {
                upsert: true,
            }
        )

        console.log('Work saved from local storage');
    } catch (err) {
        console.log(`Could not save work ${err}`);
    }
}

async function setLocalWorksInDB() {
    try {
        const filePath = join(__dirname, "..", "data", "works.json");
        const data = await readFile(filePath);
        const { works } = JSON.parse(data);

        console.log("Successfully PARSE local works, length: " + works.length);

        works.map((work) => saveWork(work))
    } catch (error) {
        console.error(error.message);
    }
}

async function loadWorks() {
    const isDbEmpty = (await getAllWorks()).length === 0;

    if (!isDbEmpty) {
        console.log("Works already loaded in DB");
    } else {
        await setLocalWorksInDB();
    }
}

async function getAllWorks() {
    return await workSchema.find(
        {},
        { // which fields are included in the response
            "_id": 0, "__v": 0, // exclude fields
        }
    )
}

module.exports = {
    loadWorks,
    getAllWorks
}