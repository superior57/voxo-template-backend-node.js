const Header = require('./header.json')
exports.getHeaders = (req, res) => {
    res.send(Header);
};