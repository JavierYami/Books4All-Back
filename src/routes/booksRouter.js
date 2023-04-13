const { Router } = require('express');
const getAllBooks = require('../controllers/getAllBooks');
const getOneBook = require('../controllers/getOneBook');

const booksRouter = Router();


//Obtener todos los libros

booksRouter.get('/', async (req, res) => {
    const { queryBook } = req.query;
    console.log(queryBook);
    if (queryBook) {
        try {
            res.send('NIY: Esta ruta trae libros por query')
        } catch (error) {
            res.send('NIY: Mensaje de error')
        }
    }
    try {
        const allBooks = await getAllBooks();
        res.status(200).json(allBooks);
        // res.send('NIY: Esta ruta trae todos los libros')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
});

booksRouter.get('/:bookId', async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await getOneBook(bookId)
        res.status(200).json(book);
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
})



module.exports = booksRouter;