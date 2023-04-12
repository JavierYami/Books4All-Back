const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User_reviews",
    {
      id_user: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
      },
      id_reviews: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
