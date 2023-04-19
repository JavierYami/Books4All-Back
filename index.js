const server = require("./src/app");
const getAllBooks = require("./src/controllers/getAllBooks");
const { getBooks } = require("./src/controllers/SaveApiData");
const { sequelize } = require("./src/DB_connection");
const port = process.env.PORT || 3001;

sequelize.sync({ alter: true }).then(() => {
  console.log('connected database, master');
  const books = getAllBooks()
  
  server.listen(port, () => {
    console.log("listening on port " + port);
    if(books)return
  else{
    getBooks()
  }
  });
});
