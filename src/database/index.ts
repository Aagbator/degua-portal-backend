import { Sequelize } from "sequelize-typescript";
import path from "path";
import config from "./config";

const dbName = config.DB_NAME;
const dbUser = config.DB_USER;
const dbHost = config.DB_HOST;
const dbPort = config.DB_PORT;
const dbPassword = config.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  port: Number(dbPort),
  host: dbHost,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
  },
});

sequelize.addModels([path.resolve(__dirname, "./models")]);

export default sequelize;
