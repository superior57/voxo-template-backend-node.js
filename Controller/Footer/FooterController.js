const Footer = require('./Footer.json')
exports.getFooter = (req, res) => {
    res.send(Footer)
}