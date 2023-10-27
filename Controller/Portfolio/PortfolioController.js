const PortFolio = require('./portfolio.json')
exports.getPortfolio = async (req, res) => {
    res.send(PortFolio)
}