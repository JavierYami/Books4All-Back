const { Book } = require("../db");

const getAllBooks = async () => {
  return await Book.findAll({
    include: [
      {
        model: Book,
      },
    ],
  });
};

module.exports = getAllBooks;
