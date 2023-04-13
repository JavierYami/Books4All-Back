const {Router} = require('express');
const booksRouter = require ('./booksRouter')
const reviewsRouter = require('./reviewsRouter');
const usersRouter = require ('./usersRouter')

const mainRouter = Router();

mainRouter.use('/books', booksRouter)
mainRouter.use('/reviews', reviewsRouter)
mainRouter.use('/users', usersRouter)
module.exports = mainRouter;
