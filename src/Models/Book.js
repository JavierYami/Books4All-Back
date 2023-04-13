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
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        unique: true,
      },
      genre: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
