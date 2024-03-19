/**
 * File that contains routes
 */
import { Router } from "express";
import { initializeLogger } from "../logger/index";
import weatherData from "../controllers/weatherApiService";

const apiRouter = Router();

apiRouter.get("/weather", initializeLogger, weatherData);

export default apiRouter;