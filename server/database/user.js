const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = User;
