const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


const homeController = require('./controllers/home');
app.get('/', homeController.getHome);


const booksController = require('./controllers/books');
app.get('/book/list', booksController.getBookList);


const authorsController = require('./controllers/authors');
app.get('/author/list', authorsController.getAuthorList);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});