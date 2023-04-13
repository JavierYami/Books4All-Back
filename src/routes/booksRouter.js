const { Router } = require('express');
const getAllBooks = require('../controllers/getAllBooks');

const booksRouter = Router();


//Obtener todos los libros

booksRouter.get('/books', async (req, res) => {
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
        res.send('NIY: Esta ruta trae todos los libros')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
});

booksRouter.get('/:bookId', (req, res) => {
    try {
        res.send('NIY: Esta ruta trae un libro por Id')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
})



module.exports = booksRouter;