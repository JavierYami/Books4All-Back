const { Router } = require('express');
const { getAllReviews, getReviewDetail, createReview } = require('../controllers/reviewsControllers');

const reviewsRouter = Router();

reviewsRouter.get('/', async (req, res) => {
    try {
         let response = await getAllReviews()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send('Mensaje de error')
    }
})
reviewsRouter.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let response = await getReviewDetail(id)
        res.status(200).send('Detalle de review')
    } catch (error) {
        res.status(400).send('Mensaje de error')
    }
})


module.exports = reviewsRouter;