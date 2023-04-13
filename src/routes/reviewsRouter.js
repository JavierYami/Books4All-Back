const { Router } = require('express')

const reviewsRouter = Router();

reviewsRouter.get('/', async (req, res) => {
    try {
        // let response = await getAllReviews()
        res.status(200).send('Todas las reviews')
    } catch (error) {
        res.status(400).send('Mensaje de error')
    }
})
reviewsRouter.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        // let response = await getReviewDetail(id)
        res.status(200).send('Detalle de review')
    } catch (error) {
        res.status(400).send('Mensaje de error')
    }
})
reviewsRouter.post('/', async (req, res) => {
    let { body, rating, book_id } = req.body
    try {
        let response = await createReview(body, rating, book_id)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send('Mensaje de error')
    }
})

module.exports = reviewsRouter;