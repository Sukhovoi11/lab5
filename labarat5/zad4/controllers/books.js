const Book = require('../models/book');


exports.getBookDetails = (req, res) => {
    const { id } = req.params;

    const book = {
        id: id,
        title: 'Example Book',
        publishingYear: 2022,
        authorId: 1
    };
    res.render('book', { book });
};