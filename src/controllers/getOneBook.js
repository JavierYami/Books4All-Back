const { Book } = require("../DB_connection");
const { review } = require("../DB_connection");

const getOneBook = async (bookId) => {
  const book = await Book.findOne({
    where: {
      id: bookId,
    },
    include: {
      include: [review],
    },
  });
  return book;
};

module.exports = getOneBook;
