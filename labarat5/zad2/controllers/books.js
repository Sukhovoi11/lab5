const Books = require('../../zad1/models/book');

exports.getBookList = (req, res) => {
    const books = [];
    res.render('book', { books });
};