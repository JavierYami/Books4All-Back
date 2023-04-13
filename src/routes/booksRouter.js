const {Router} = require('express');

const booksRouter = Router ();

booksRouter.get('/', (req,res) => {
    const {queryBook} = req.query;
    console.log(queryBook);
    if(queryBook){
        try {
         res.send('NIY: Esta ruta trae libros por query')
        } catch (error) {
        res.send('NIY: Mensaje de error')
        }
    }
    try {
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