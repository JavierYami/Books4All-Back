const { Book } = require("../db");

const getOneBook = async (id) => {
  const book = await Book.findByPk(id, {
    include: {
      model: Book,
    },
  });
  return book;
};

module.exports = getOneBook;
