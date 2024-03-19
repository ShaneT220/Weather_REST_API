/**
 * Logger class
 */

class Logger {
  logger: any;
  loggerFields: any;

  constructor(logger: any, loggerFields: any) {
    this.logger = logger;
    this.loggerFields = loggerFields;
  }

  getLoggerFields() {
    return this.loggerFields
  }

  setLoggerFields(loggerFields: any) {
    this.loggerFields = loggerFields
  }

  error(message: any, stepName: any = "") {
    this.logger.error(message, { stepName, ...this.loggerFields });
  }

  warn(message: any, stepName: any = "") {
    this.logger.warn(message, { stepName, ...this.loggerFields });
  }

  info(message: any, stepName: any = "") {
    this.logger.info(message, { stepName, ...this.loggerFields });
  }

  debug(message: string, stepName: any = "") {
    this.logger.debug(message, { stepName, ...this.loggerFields });
  }
}

export default Logger;