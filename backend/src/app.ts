import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import config from "config"; // Config file located in config/default.ts
import logger from "./utils/logger";
import {version} from "../package.json";
import socket from "./socket";

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = config.get<string>("corsOrigin");

const app = express();
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: corsOrigin,
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.send('Hello World! v' + version);
  }
);

http.listen(port, host, () => {
  logger.info(`Server ${version} listening on http://${host}:${port}/`);
  socket({ io });
});