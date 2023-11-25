const { getAllWorks } = require("../../models/works.model")
function httpGetAllWorks(req, res) {
    const allWorks = getAllWorks();
    console.log(allWorks, "allWorks");

    return res.status(200).json(allWorks);
}

module.exports = {
    httpGetAllWorks
}