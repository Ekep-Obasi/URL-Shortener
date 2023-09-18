const sequelize = require("./index");
const TinyUrl = require("./model");
const User = require("./user");

function relate() {
  sequelize.sync({ alter: true });

  TinyUrl;
  User;

  sequelize.sync();
}

module.exports = relate;
