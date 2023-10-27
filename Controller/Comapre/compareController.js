const product = require('../Product/product.json')
const compareArr = []

exports.PostCompareData = async (req, res) => {
    !compareArr.includes(req.params.id) && compareArr.push(Number(req.params.id));
    res.send(compareArr)
};

exports.GetCompareData = async (req, res) => {
    const filterCart = product.filter((data, i) => compareArr.includes(Number(data.id)))
    res.send(filterCart)
};

exports.DeleteComapareData = async (req, res) => {
    compareArr.splice(compareArr.indexOf(Number(req.params.id)), 1);
    const filterCart = product.filter((data, i) => compareArr.includes(Number(data.id)))
    res.send(filterCart)
}