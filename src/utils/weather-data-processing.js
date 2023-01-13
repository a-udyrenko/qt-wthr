import {
  getMinValueFromDate,
  getMaxValueFromDate,
  getAvgValueFromDate,
  getMostFrequentValueFromDate
} from './helpers';

// For the used weather API details, please refer to:
// https://openweathermap.org/forecast5

// Api returns the set of 3-hours chunks of data for the next 5 days.
// This function parses it and collects all single date related chunks under one key.
// Returns an object, where each key corresponds to the separate date,
// and each value corresponds to the set of 3-hours weather data chunks for that date. 
const mapWeatherDataChunksPerDate = (weatherData) => {
  const forecastDataPerDate = weatherData.list.reduce((acc, chunk) => {
    const dateChunkData = {
      date: new Date(chunk.dt * 1000),
      temp: Math.round(chunk.main.temp),
      feelsLike: Math.round(chunk.main.feels_like),
      humidity: Math.round(chunk.main.humidity),
      windSpeed: Math.round(chunk.wind.speed),
      windDeg: chunk.wind.deg,
      weather: chunk.weather[0].main,
      description: chunk.weather[0].description,
      icon: chunk.weather[0].icon,
      dayNight: chunk.sys.pod
    };

    const chunkDate = dateChunkData.date.getDate();

    acc[chunkDate] = acc[chunkDate] ? [...acc[chunkDate], dateChunkData] : [dateChunkData];

    return acc;
  }, {});

  return forecastDataPerDate;
};

const prepareForecastDataForUi = (apiWeatherData) => {
  const dataChunksPerDate = mapWeatherDataChunksPerDate(apiWeatherData);

  // Parse 3-hours weather data chunks for each date and calculates the needed values for UI.
  const forecastDataForUi = Object.values(dataChunksPerDate).reduce((acc, dateChunks) => {
    acc.push({
      date: dateChunks[0].date, // Pick first chunk date, cause hours are not important here
      weather: getMostFrequentValueFromDate(dateChunks, 'weather'),
      icon: getMostFrequentValueFromDate(dateChunks, 'icon').replace('n', 'd'), // use only day icons
      tempMin: getMinValueFromDate(dateChunks, 'temp'),
      tempMax: getMaxValueFromDate(dateChunks, 'temp'),
      tempSet: dateChunks.map((chunk) => chunk.temp),
      humidity: getAvgValueFromDate(dateChunks, 'humidity'),
    });

    return acc;
  }, []);

  return forecastDataForUi;
};

const prepareTodayDataForUi = (apiWeatherData) => {
  const dataChunksPerDate = mapWeatherDataChunksPerDate(apiWeatherData);

  const todayDataForUi = dataChunksPerDate[Math.min(...Object.keys(dataChunksPerDate))];

  return todayDataForUi;
};

export {
  prepareForecastDataForUi,
  prepareTodayDataForUi
};
