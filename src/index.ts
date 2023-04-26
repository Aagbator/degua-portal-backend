import "dotenv/config";

import express, { Express, Request, Response } from "express";
import ErrorHandler from "./common/errorHandler";
import memberRoute from "./routes/member.routes";

import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";

import sequelize from "./database";
(async () => {
  await sequelize.sync({ alter: true });
})();

const app: Express = express();

app.use(compression()); // Best practices
app.use(morgan("common")); // HTTP request logger middleware for node.js

// parses the body for POST, PUT, DELETE, etc.
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* Set Security Configs */
app.use(helmet());

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/member", memberRoute);

app.use(ErrorHandler.logError);
app.use(ErrorHandler.sendError);

// const port = process.env.HTTP_PORT;
const port = process.env.SERVER_PORT || 4000;

try {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`);
}
