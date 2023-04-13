const { Book } = require("../db");

const getAllBooks = async () => {
  return await Book.findAll();
};

module.exports = getAllBooks;
