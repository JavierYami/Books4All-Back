const {Reviews, Book} = require('../DB_connection');
const getAllReviews = async () => {
    /* const dbReviews = await Reviews.findAll({
        include: {
            model: Book
        }
    })
    return dbReviews; */
}

const getReviewDetail = async (id) => {
    /*  const reviewDetail = async Reviews.findByPk(id, {
         include: {
             model: Book
         }
     })
     return reviewDetail */
}

const createReview = async (body, rating, book_id) => {

    try {
        const book = await Book.findByPk(bookId);
        if(!book){
            throw new Error('No se encontró el libro');
        }

        const newReview = await Reviews.create({
            id,
            body, 
            rating
        });
        await book.addReviews(newReview)
    } catch (error) {
        throw new Error(error.message);
    }
   
    // await newReview.addBook(book_id,{
    //     through: "book_review"
    // }) 
    return newReview
}
module.exports = { createReview, getAllReviews, getReviewDetail }