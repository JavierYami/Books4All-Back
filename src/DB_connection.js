require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const BookModel = require('./Models/Book');
const ReviewsModel = require('./Models/Reviews');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false,
        native: false
    }
);

BookModel(sequelize);
ReviewsModel(sequelize);

//Relaciones entidad

const {Book, Reviews} = sequelize.models

Book.hasMany(Reviews);
Reviews.belongsTo(Book);


module.exports = {
    ...sequelize.models,
    sequelize
}