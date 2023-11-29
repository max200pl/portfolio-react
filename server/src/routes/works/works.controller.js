const { getAllWorks } = require("../../models/works.model");

const { join } = require("node:path");
async function httpGetAllWorks(req, res) {
    const allWorks = await getAllWorks();
    return res.status(200).json(allWorks);
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
            console.log('Sent:', Object.values(req.query)[0])
        }
    })
}

module.exports = {
    httpGetAllWorks,
    httpGetImagesWork
}