const Author = require('../../zad1/models/author');

exports.getAuthorList = (req, res) => {
    const authors = [];
    res.render('authors', { authors });
}