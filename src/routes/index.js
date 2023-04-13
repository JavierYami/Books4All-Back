const {Router} = require('express');
const booksRouter = require ('./booksRouter')
const usersRouter = require ('./usersRouter')

const mainRouter = Router();

mainRouter.use('/books', booksRouter)
mainRouter.use('/users', usersRouter)

module.exports = mainRouter;

//comentario