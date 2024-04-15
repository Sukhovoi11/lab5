const Books = require('../models/book');
exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const id = Date.now();
    const newBook = new Books(id, title, publishingYear, authorId);
    res.redirect('/book/list');
};
exports.deleteBook = (req, res) => {
    const { id } = req.params;
    res.redirect('/book/list');
};