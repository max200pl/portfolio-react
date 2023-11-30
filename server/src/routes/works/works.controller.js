const { getAllWorks, getAllCategories, getGetFilterWorks } = require("../../models/works.model");

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

module.exports = {
    httpGetAllWorks,
    httpGetImagesWork,
    httpGetCategoriesWorks,
}