/**
 * Initializes app
 */
import express, { Application } from "express";
import apiRouter from "./routes/routes";
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const PORT = process.env.API_PORT || 5000;

app.use(apiRouter);

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
})

