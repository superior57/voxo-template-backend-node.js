const CategoryMenu = require('./CategoryMenu.json')
exports.getCategoryMenu = (req, res) => {
    res.send(CategoryMenu)
}