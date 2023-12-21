// создать на основе папки images json
const fs = require('fs').promises;
const path = require("path");
const { encode } = require("blurhash");
const sharp = require("sharp");
const { readFile } = require("node:fs/promises");

const IMAGES_DIR_PATH = path.join(__dirname, "..", "images")
const IMAGES_JSON_DIR_PATH = path.join(__dirname, "..", "data", "images.json");


// ========  HELPERS ========== //

const getImageName = (str) => {
    return str.slice(str.indexOf("/") + 1)
}

const getFolderName = (str) => {
    return str.slice(0, str.indexOf("/"))
}

async function getLocalImages() {
    try {
        const localImagesJSON = await readFile(IMAGES_JSON_DIR_PATH);
        const { images } = JSON.parse(localImagesJSON);

        console.log("Images Local Successfully PARSE");
        return images
    } catch (error) {
        console.log(error.message)
    }
}

// ========  /helpers ========== //

const encodeImageToBlurHash = (path) => {
    return new Promise((resolve, reject) => {
        sharp(path)
            .raw()
            .ensureAlpha()
            .resize(32, 32, { fit: "inside" })
            .toBuffer((err, buffer, { width, height }) => {
                if (err) return reject(err);
                resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
            });
    });
}

async function encodeAllImages(arrImagesName) {

    const data = []; //  { name: string; blurHash: string }[]

    for (const str of arrImagesName) {
        const fileName = getImageName(str);
        const folder = getFolderName(str);

        const encodedHash = await encodeImageToBlurHash(path.join(__dirname, "..", "images", folder, fileName));
        console.log(`File name: ${fileName} - encoded`)
        data.push({ name: str, blurHash: encodedHash });
    }

    return data
}

function readImages(directory, parentFolder = '') {
    const items = fs.readdirSync(directory);
    const result = [];

    items.forEach(item => {
        const itemPath = path.join(directory, item);
        const currentPath = path.join(parentFolder, item).replace(/\\/g, '/');

        if (fs.statSync(itemPath).isDirectory()) {
            const subImages = readImages(itemPath, currentPath);
            result.push(...subImages);
        } else {
            // Проверяем, является ли текущий элемент изображением
            const extension = path.extname(item).toLowerCase();
            if (extension === '.png' || extension === '.jpg') {
                // Если да, добавляем полный путь к изображению в массив

                result.push(
                    currentPath
                );
            }
        }
    });

    return result;
}

// записать в JSON file images.json в начало файла
async function createImageJson() {
    const folderAndFileNames = readImages(IMAGES_DIR_PATH);
    const allImages = await encodeAllImages(folderAndFileNames);

    fs.writeFile(path.join(__dirname, "..", "data", "images.json"), JSON.stringify({ images: allImages }, null, 2), err => {
        if (err) {
            console.error(`There was an error creating ${JSON.stringify(err)}`)
        } else {
            console.log("File IMAGE_JSON created successfully")
        }
    });
}

async function addNewImageIntoJson(image) {
    try {
        const data = await fs.readFile(IMAGES_JSON_DIR_PATH, 'utf-8');
        const jsonData = JSON.parse(data);

        const newEntry = image;
        jsonData.images.unshift(newEntry);

        const updatedJsonString = JSON.stringify(jsonData, null, 2);

        await fs.writeFile(IMAGES_JSON_DIR_PATH, updatedJsonString);

        console.log('File IMAGE_JSON created successfully');
    } catch (error) {
        console.error(`There was an error: ${error.message}`);
    }
}

module.exports = {
    createImageJson,
    addNewImageIntoJson,
    getImageName,
    getFolderName,
    getLocalImages,
    encodeImageToBlurHash
}