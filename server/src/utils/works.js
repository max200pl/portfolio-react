
const fs = require("fs");
const { getLocalImages, getImageName, getFolderName } = require("../utils/images");
const path = require('path');
const WORKS_JSON_DIR_PATH = path.join(__dirname, "..", "data", "works.json");

async function getLocalWorks() {
    try {
        const localWorksJSON = await fs.readFile(WORKS_JSON_DIR_PATH);
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

module.exports = {
    loadWorks,
    updateLocalWorks,
}