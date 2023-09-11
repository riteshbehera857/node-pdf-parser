import express, { NextFunction, Request, Response } from "express";

import { config } from "dotenv";
import morgan from "morgan";

config();

export const app = express();
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    error: false,
    message: "Hello from server",
  });
});

export const { PORT, MONGO_URI } = process.env;
