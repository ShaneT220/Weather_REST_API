# Weather REST API

This is a REST API for fetching weather data.

## Installation

To install the dependencies, run:
npm install

## Build

To build the application, run:
npm run build

This command will compile TypeScript files into JavaScript files and output them into a folder named `dist`.

## Starting the Application

To start the application, run:
npm run start

This command will start the application using the files compiled in the `dist` folder.

## Development

During development, you can use:
npm run dev

This command will run the application in development mode using `nodemon`, which automatically restarts the server when changes are detected in the source files.

## Environment Variables

Make sure to set the following environment variables:

- `WEATHER_API_KEY`: Your API key for accessing weather data.
- `WEATHER_API_URL`: The API endpoint to access weather data.
- `API_PORT`: Your desired port to run this API. DEFAULT: PORT 5000

## Endpoints

- `/weather?city={cityName}`: Retrieves weather data for the specified city.