const { text } = require("express");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Reviews", {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    userName: {
      //podríamos capturar el usuario y evitarle al usuario que lo complete a mano?
      type: DataTypes.STRING,
      allowNull: false,
    },
    book: {
      //en el caso en que no creemos libros nuevos desde el form podríamos omitir este atributo y que el input del libro en el formulario sea una searchBar o un menú desplegable con todos los libros
      allowNull: false,
    },
  });
};
