const server = require("./src/app");
const { getBooks } = require("./src/controllers/SaveApiData");
const { sequelize } = require("./src/DB_connection");

sequelize.sync({ force: false }).then(async () => {
  console.log('connected database, master');
  //getBooks();
  server.listen(3001, () => {
  // const books =await getBooks();
    console.log("listening on port 3001 - testing changes");
  });
});
