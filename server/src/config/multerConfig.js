// multerConfig.js
const multer = require('multer');
const { join, extname } = require('path');
const fs = require('fs');
const { toCamelCase } = require('../helpers/helpers');

const SRC_IMAGE_FOLDER = "../images/"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folderPath = join(__dirname, SRC_IMAGE_FOLDER, toCamelCase(req.body.name))

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true })
        }

        cb(null, folderPath)
    },
    filename: (req, file, cb) => {
        const filename = 'intro';
        const fileExtension = extname(file.originalname);

        // Remove any existing files with the name "intro" in the specified directory
        const filesToRemove = fs.readdirSync(join(__dirname, SRC_IMAGE_FOLDER, toCamelCase(req.body.name)))
            .filter(existingFile => existingFile.startsWith(filename));

        filesToRemove.forEach(existingFile => {
            fs.unlinkSync(join(__dirname, SRC_IMAGE_FOLDER, toCamelCase(req.body.name), existingFile));
        });

        cb(null, filename + fileExtension);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;