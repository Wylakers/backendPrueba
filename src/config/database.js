import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const hostname = process.env.HOSTNAME || "localhost";
const username = process.env.DBUSER || "postgres";
const password = process.env.PASSWORD || "123";
const database = process.env.DATABASE || "trabajo";
const dialect = process.env.DIALECT || "postgres";
const port = process.env.DBPORT || 5433;

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: dialect,
  port: port,
});

// const sequelize = new Sequelize(
//   "postgres://postgres:123@localhost:5433/trabajo"
// );

export default sequelize;
