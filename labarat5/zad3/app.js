const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Obsługa danych z formularzy

const booksController = require('./controllers/books');


app.get('/book/add', (req, res) => {
    res.render('add-book');
});


app.post('/book/add', booksController.addBook);


app.delete('/book/delete/:id', booksController.deleteBook);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});