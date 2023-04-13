const {Router} = require('express');
const booksRouter = require ('./booksRouter')
const reviewsRouter = require('./reviewsRouter');

const mainRouter = Router();

mainRouter.use('/books', booksRouter)
mainRouter.use('/reviews', reviewsRouter)

module.exports = mainRouter;

//comentario