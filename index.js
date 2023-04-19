const server = require("./src/app");
const { getBooks } = require("./src/controllers/SaveApiData");
const { createRoles } = require("./src/controllers/saveRoles");
const { sequelize } = require("./src/DB_connection");
const port = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  console.log('connected database, master');
  getBooks();
  createRoles();
  server.listen(port, () => {
    console.log("listening on port " + port);
  });
});
