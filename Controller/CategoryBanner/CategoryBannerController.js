const CategoryBanner = require('./CategoryBanner.json')
exports.getCategoryBanner = async (req, res) => {
    res.send(CategoryBanner)
}
