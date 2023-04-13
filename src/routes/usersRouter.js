const {Router} = require('express');

const usersRouter = Router ();

usersRouter.get('/', (req,res) => {
    const {queryUser} = req.query;
    if(queryUser){
        try {
         res.send('NIY: Esta ruta trae usuarios por query')
        } catch (error) {
        res.send('NIY: Mensaje de error')
        }
    }
    try {
        res.send('NIY: Esta ruta trae todos los usuarios')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
});

usersRouter.get('/:userId', (req, res) => {
    try {
        res.send('NIY: Esta ruta trae un usuario por Id')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
})

usersRouter.get('/reviews/all', (req, res) => {
    try {
        res.send('NIY: Esta ruta trae todos las reviews del ususario')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
})

module.exports = usersRouter;
