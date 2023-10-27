const Homeslider = require('./homeSlider.json')
exports.getHomeSlider = async (req, res) => {
    res.send(Homeslider.data);
}

// filter example --------------
// const { type } = req.params
// var ToSend = Homeslider.data.filter((elem) => elem.type === type)