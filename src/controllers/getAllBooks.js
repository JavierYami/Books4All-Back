const { Book } = require("../DB_connection");

const getAllBooks = async () => {
  return await Book.findAll({
    include: [
      {
        model: Book,
      },
    ],
  });
};

 c

module.exports = getAllBooks;
