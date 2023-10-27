const PopularCard = require('./Popular.json')
exports.getPopularCard = async (req, res) => {
    res.send(PopularCard)
}