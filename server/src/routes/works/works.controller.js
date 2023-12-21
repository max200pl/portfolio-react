const { toCamelCase, Work, parseStringsToNumbers } = require("../../helpers/helpers");
const { getAllWorks, getAllCategories, getGetFilterWorks, getTechnologies, saveWork } = require("../../models/works.model");
const { addNewImageIntoJson, encodeImageToBlurHash } = require("../../utils/images")
const { join } = require("node:path");


async function httpGetAllWorks(req, res) {
    let works = undefined;
    const { category } = req.query;
    console.log(category, "category");

    try {
        if (category) {
            works = await getGetFilterWorks(category)
        } else {
            works = await getAllWorks();
        }
        return res.status(200).json(works);
    } catch (error) {
        res.status(400).json({
            error: `Something went wrong ${error}`,
        });
    }

    return res.status(200).json(works);
}

async function httpGetImagesWork(req, res) {
    const { project, name } = req.query;

    const options = {
        root: join(__dirname, "../../images/" + project),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    return res.sendFile(name, options, function (err) {
        if (err) {
            console.log(err.message)
        } else {
            console.log(`Sent: ${project}__${name}____`);
        }
    })
}
async function httpGetCategoriesWorks(req, res) {
    const allCategories = await getAllCategories();

    if (!allCategories) return res.status(400).json({
        error: `Something went wrong`,
    });

    return res.status(200).json(allCategories);
}
async function httpGetTechnologies(req, res) {
    const technologies = await getTechnologies();

    if (!technologies) return res.status(400).json({
        error: `Something went wrong`,
    });

    return res.status(200).json(technologies[0]);
}

async function httpCreatedWork(req, res) {
    const work = parseStringsToNumbers(req.body);
    const image = req.file;

    if (!work || !image) return res.status(400).json({
        error: `Something went wrong`,
    });

    const cardImage = {
        name: `${toCamelCase(work.name)}/${image.filename}`,
        blurHash: await encodeImageToBlurHash(image.path),
    };

    const newWork = Work.create({
        ...work,
        cardImage
    })

    console.log(newWork, 'newWork');

    try {
        await addNewImageIntoJson(cardImage);
        const result = await saveWork(newWork);
        console.log("Save work success:", result);
    } catch (err) {
        console.error(err.message);
    }


    return res.status(201).json(work);
}

module.exports = {
    httpGetAllWorks,
    httpGetImagesWork,
    httpGetCategoriesWorks,
    httpCreatedWork,
    httpGetTechnologies,
}