import { ConnectOptions } from "mongoose";
import { DB_HOST, DB_PORT, DB_DATABASE } from "../config";

type MongodbConnection = {
  url: string;
  options: ConnectOptions
};


export const mongodbConnection: MongodbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {},
};
