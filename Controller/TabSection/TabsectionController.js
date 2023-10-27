const tabsection = require('./Tabsection.json')
exports.getTabSection = (req, res) => {
    res.send(tabsection)
}