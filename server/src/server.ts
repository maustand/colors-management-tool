import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import { connect } from "mongoose";
import morgan from "morgan";
import { LOG_FORMAT, NODE_ENV, PORT } from "./config";
import { mongodbConnection } from "./utils/mongodbConnection";
import apiRouter from "./api/api.router";

const app = express();
const env = NODE_ENV || "development";
const port2Listen = PORT || 3000;

connectToDatabase();
initializeMiddlewares();

app.use("/", apiRouter); // init routes

app.listen(port2Listen, () => {
  console.info(`=================================`);
  console.info(`======= ENV: ${env} =======`);
  console.info(`🚀 App listening on the port ${port2Listen}`);
  console.info(`=================================`);
});

function initializeMiddlewares() {
  app.use(morgan(LOG_FORMAT || "short"));
  app.use(cors());
  app.use(hpp());
  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
}

function connectToDatabase() {
  connect(mongodbConnection.url, mongodbConnection.options).then(() =>
    console.info(`MongoDB connection established on ${mongodbConnection.url}`)
  );
}

export default app;
