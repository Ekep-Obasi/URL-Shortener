const { DataTypes, Model } = require("sequelize");
const sequelize = require(".");
const crypto = require("crypto");

const TinyUrl = sequelize.define(
  "tinyurl",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    longUrl: {
      type: DataTypes.STRING,
      require: true,
    },
    shortUrl: {
      type: DataTypes.STRING,
      require: true,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = TinyUrl;
