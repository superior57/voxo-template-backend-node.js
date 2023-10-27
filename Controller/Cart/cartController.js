const product = require('../Product/product.json')
const newArr = []

exports.PostCartData = async (req, res) => {
  var qty = 0
  const result = Object.values(req.body);
  if (!newArr.includes(result[0])) {
    newArr.push(result[0]);
  } else {
    // qty + 1
    // newArr.push({ product: result[0], qtys: qty + 1 })
    // console.log("repeated data", qty)
  }

  res.send(newArr)
};

exports.GetCartData = async (req, res) => {
  const filterCart = product.filter((data, i) => newArr.includes(data.id))
  res.send(filterCart)
};

exports.DeleteCartData = async (req, res) => {
  newArr.splice(newArr.indexOf(Number(req.params.id)), 1);
  const filterCart = product.filter((data, i) => newArr.includes(data.id))
  if (req.params.id == 'all') {
    newArr.splice(0, newArr.length)
    res.send([])
  } else {
    res.send(filterCart)
  }
}