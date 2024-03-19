/**
 * Initialize Logger function to be used else where if needed
 */
import winston from "winston";
import Logger from "./logger-format";
import { Request as ExpressRequest, Response, NextFunction } from 'express';

const loggerFields = {
  originatingSource: ""
};

const loggerConfig = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  }
}

const winstonInstance = winston.createLogger({
  levels: loggerConfig.levels,
  level:"info",
  transports: new winston.transports.Console({
    format: winston.format.combine(
      winston.format.label({label: process.env.npm_package_name}),
      winston.format.timestamp(),
      winston.format.json()
    )
  })
});

interface CustomRequest extends ExpressRequest {
  logger: Logger;
}

const initializeLogger = (req: CustomRequest, res: Response, next: NextFunction) => {
  const logger = loggerInstance;
  const message = {
    headers: req.headers,
    httpVersion: req.httpVersion,
    method: req.method,
    originalUrl: req.originalUrl,
    url: req.url,
    query: req.query,
    params: req.params,
    body: req.body
  };
  logger.logger.info(message, "Incoming request");

  req.logger = logger.logger
  return next();
}

const loggerInstance = {logger: new Logger(winstonInstance, loggerFields), initializeLogger, winstonInstance, loggerFields}

export {loggerInstance, initializeLogger};