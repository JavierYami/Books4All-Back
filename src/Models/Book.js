const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.TEXT, // "id": "GLQvEAAAQBAJ",
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      genre: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
