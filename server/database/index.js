const Sequelize = require("sequelize");
const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_LANG,
} = require("../utils/constants");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_LANG,
});

module.exports = sequelize;
