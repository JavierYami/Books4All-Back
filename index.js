const server = require("./src/app");
const { sequelize } = require('./src/DB_connection');


sequelize.sync({ force: false }).then(async () => {
  console.log('connected database, master');

  server.listen(3001, () => {
    console.log("listening on port 3001 - testing changes");
  });

})



console.log("listening on port 3001 - testing changes");


