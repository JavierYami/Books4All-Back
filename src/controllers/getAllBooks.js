const { Book } = require("../DB_connection");

const getAllBooks = async () => {

  return await Book.findAll();
};


module.exports = getAllBooks;
