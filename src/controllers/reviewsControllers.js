
const getAllReviews = async () =>{
    /* const dbReviews = await Reviews.findAll({
        include: {
            model: Book
        }
    })
    return dbReviews; */
}

const getReviewDetail = async (id) =>{
   /*  const reviewDetail = async Reviews.findByPk(id, {
        include: {
            model: Book
        }
    })
    return reviewDetail */
}

const createReview = async (body, rating, book_id) =>{
    /* const newReview = await Reviews.create({body, rating})
    await newReview.addBook(book_id,{
        through: "book_review"
    }) */
    return 'Review successful'
}
module.exports = {createReview, getAllReviews, getReviewDetail}