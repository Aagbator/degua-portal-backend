import { SequelizeOptions } from "sequelize-typescript";
import { config as configDotenv } from "dotenv";
import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();

switch (process.env.NODE_ENV) {
  case "development":
    configDotenv({
      path: resolve(__dirname, "../../../.env.development"),
    });
    break;
  case "production":
    configDotenv({
      path: resolve(__dirname, "../../../.env.production"),
    });
    break;
  // Add 'staging' and 'production' cases here as well!
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`);
}

export default {
  NODE_ENV: process.env.NODE_ENV!,
  DB_NAME: process.env.DB_NAME!,
  DB_USER: process.env.DB_USER!,
  DB_HOST: process.env.DB_HOST!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_PORT: process.env.DB_PORT!,
  SERVER_PORT: process.env.SERVER_PORT!,
  SECRET_KEY: process.env.SECRET_KEY!,
  S3_BUCKET: process.env.S3_BUCKET!,
};
