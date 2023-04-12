const {Router} = require('express');
const booksRouter = require ('./booksRouter')

const mainRouter = Router();

mainRouter.use('/books', booksRouter)

module.exports = mainRouter;

//comentario