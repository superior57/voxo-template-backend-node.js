const product = require('./product.json')
exports.getProduct = (req, res) => {
    // const { type } = req.params;
    // var toSend = product.data.filter(item => item.type === type)

    res.send(product);
}

exports.getProductById = (req, res) => {
    const { id } = req.params;
    var toSend = product.filter(item => item.id == id)
    res.send(toSend);
}