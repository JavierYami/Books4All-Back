require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
const BookModel = require('./Models/Book');
const ReviewsModel = require('./Models/Reviews');
const UserModel = require('./Models/User')

 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
     {
         logging: false,
         native: false
     }
 );
/* const sequelize = new Sequelize(DB_DEPLOY, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }); */

BookModel(sequelize);
ReviewsModel(sequelize);
UserModel(sequelize)

//Relaciones entidad

const {Book, Reviews, User} = sequelize.models

Book.hasMany(Reviews);
Reviews.belongsTo(Book);

User.hasMany(Reviews);
Reviews.belongsTo(User);


module.exports = {
    ...sequelize.models,
    sequelize
}