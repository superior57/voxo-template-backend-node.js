const BlogData = require('./Blog.json');
exports.getBlog = (req, res) => {
    res.send(BlogData)

}