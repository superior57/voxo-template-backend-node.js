const product = require('../Product/product.json')
const storeId = []
exports.PostWishlistData = async (req, res) => {
    const result = Object.values(req.body);
    if (!storeId.includes(result[0])) {
        storeId.push(result[0]);
    }

    res.send(storeId)
}

exports.GetWishlistData = async (req, res) => {
    const wishlistCart = product.filter((data, i) => storeId.includes(data.id))
    res.send(wishlistCart)
};

exports.DeleteWishlistData = async (req, res) => {
    storeId.splice(storeId.indexOf(Number(req.params.id)), 1);
    const filterCart = product.filter((data, i) => storeId.includes(data.id))
    if (req.params.id == 'all') {
        storeId.splice(0, storeId.length)
        res.send([])
    } else {
        res.send(filterCart)
    }
}