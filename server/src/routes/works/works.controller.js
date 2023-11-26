const { getAllWorks } = require("../../models/works.model");

async function httpGetAllWorks(req, res) {
    const allWorks = await getAllWorks();
    return res.status(200).json(allWorks);
}

module.exports = {
    httpGetAllWorks
}