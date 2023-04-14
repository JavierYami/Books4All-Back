const {Reviews, Book} = require('../DB_connection');
const getAllReviews = async () => {
    const dbReviews = await Reviews.findAll({
        include: {
            model: Book
        }
    })
    return dbReviews;
}

const getReviewDetail = async (id) => {
     const reviewDetail = await Reviews.findOne({
        where: {
            id: id
        }, 
        include: {
             model: Book
         }
     })
     return reviewDetail
}


module.exports = { createReview, getAllReviews, getReviewDetail }