const { readFile } = require("node:fs/promises");
const { join } = require("node:path");
const workSchema = require("../db/works.mongo");
const fs = require("fs");
const { getLocalImages, getImageName, getFolderName } = require("../utils/images");

const WORKS_JSON_DIR_PATH = join(__dirname, "..", "data", "works.json");

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
        console.log('Work saved in database');
    } catch (err) {
        console.log(`Could not save work ${err}`);
    }
}

async function getLocalWorks() {
    try {
        const localWorksJSON = await readFile(WORKS_JSON_DIR_PATH);
        const { works } = JSON.parse(localWorksJSON);

        console.log("local Works Successfully PARSE");
        return works
    } catch (error) {
        console.log("Error parse works:", error)
    }
}


function getWorkImages(idWork, localImages) { // nameFolder

    const dataImages = {
        cardImage: {
            name: "",  // intro.png
            blurHash: ""
        },
        images: []
    }


    localImages.map((image) => {
        const imageName = getImageName(image.name);
        const folderName = getFolderName(image.name);


        if (idWork === folderName) {
            if (imageName.includes("intro")) {
                dataImages.cardImage = image
            } else {
                dataImages.images.push(image)
            }
        }
    })

    return dataImages
}

async function bindImagesAndWork() {
    const localWorks = await getLocalWorks();
    const localImages = await getLocalImages();

    const updatedWorks = localWorks.map(work => {
        const { cardImage, images } = getWorkImages(work.id, localImages);

        return {
            ...work,
            cardImage: cardImage,
            images: images,
        }
    })

    return updatedWorks
}

async function updateLocalWorks() {
    const works = await bindImagesAndWork();

    fs.writeFile(WORKS_JSON_DIR_PATH, JSON.stringify({ works: works }, null, 2), err => {
        if (err) {
            console.error(`There was an error creating ${JSON.stringify(err)}`)
        } else {
            console.log("File WORKS_JSON created successfully")
        }
    });

}

async function setLocalWorksInDB() {
    try {
        const works = await getLocalWorks();
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
        {
            "_id": 0, "__v": 0,
        }
    )
}

async function getGetFilterWorks(category) {
    return await workSchema.find(
        { "category": category }, // which fields are included in the response
        {
            "_id": 0, "__v": 0,
        }
    )
}

async function getAllCategories() {
    return await workSchema.find({}, { "category": 1, "_id": 0 })
}

module.exports = {
    loadWorks,
    getAllWorks,
    updateLocalWorks,
    getAllCategories,
    getGetFilterWorks,
}