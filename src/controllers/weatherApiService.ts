/**
 * Weather API function
 */
import axios from "axios";
import { Request as ExpressRequest, Response, NextFunction } from 'express';
import Logger from "../logger/logger-format";
import querystring from "querystring";

interface CustomRequest extends ExpressRequest {
  logger: Logger; 
}

async function weatherData(req: CustomRequest, res: Response, next: NextFunction) {
  const logger = req.logger;
  try {
    const city = req.query['city'] as string
    if (!city || city === '') {
      // Throws error if the city field is empty.
      throw new Error("City paramater empty");
    } else {
      const apiKey = process.env.WEATHER_API_KEY
      const apiURL = process.env.WEATHER_API_URL
      const queryParams = {
        q: city,
        appid: apiKey,
        units: "imperial"
      };
      // Append apiURL and add in relevent data such as the api key and city
      const queryString = apiURL+ "weather?" + querystring.stringify(queryParams);
      const results = await axios.get(queryString)
      res.status(200).json({
        data: [results.data],
        message: null,
        status: 200
      });
    }
  } catch(error) {
    if (error.message.includes(404)) {
      // Throws error if response comes back as a 404.
      // More than likely City was not found.
      logger.error(error.message, "Request failed with status code 404 \nCity not found")
      res.status(200).send({
        data: [],
        message:"Request failed with status code 404. City not found.",
        status: 404
      });
    } else {
      logger.error(error, "Error thrown when getting weather api data");
      res.status(200).send({
        data: [],
        message: error.message || "Something is wrong with the weather api",
        status: 500
      });
    }
  }
}

export default weatherData;