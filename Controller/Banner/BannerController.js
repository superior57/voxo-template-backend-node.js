const banner = require('./banner.json')

exports.getBanner = async (req, res) => {
    res.send(banner.data);
}
// const { subtype } = req.params;
// var toSend = banner.data.filter(item => item.subtype === subtype)