const { Router } = require('express');
const getAllBooks = require('../controllers/getAllBooks');
const getBooksByQuery = require('../controllers/getBooksByQuery');

const booksRouter = Router();


//Obtener todos los libros 

booksRouter.get('/', async (req, res) => {
    const { queryBook } = req.query;
    if (queryBook) {
        try {
            const books = await getBooksByQuery(queryBook)
            return res.status(200).json(books) 
        } catch (error) {
            return res.status(400).json({error:error.message}) 
        }
    }
    try {
        const allBooks = await getAllBooks();
        return res.status(200).json(allBooks);
    } catch (error) {
        return res.status(400).json({error:error.message})
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