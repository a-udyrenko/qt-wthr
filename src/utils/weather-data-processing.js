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
const mapWeatherDataPerDate = (weatherData) => {
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

    // Accumulator is an object, where each key corresponds to the date,
    // and each value corresponds to the set of weather data for that date. 
    acc[chunkDate] = acc[chunkDate] ? [...acc[chunkDate], dateChunkData] : [dateChunkData];

    return acc;
  }, {});

  return forecastDataPerDate;
};

const prepareForecastDataForUi = (apiWeatherData) => {
  const forecastDataPerDate = mapWeatherDataPerDate(apiWeatherData);
  
  // Parse 3-hours weather data chunks for each date and calculates the needed values for UI.
  const forecastDataForUi = Object.values(forecastDataPerDate).reduce((acc, dateData) => {
    acc.push({
      date: dateData[0].date,
      weather: getMostFrequentValueFromDate(dateData, 'weather'),
      icon: getMostFrequentValueFromDate(dateData, 'icon').replace('n', 'd'), // use only day icons
      tempMin: getMinValueFromDate(dateData, 'temp'),
      tempMax: getMaxValueFromDate(dateData, 'temp'),
      tempSet: dateData.map((chunk) => chunk.temp),
      humidity: getAvgValueFromDate(dateData, 'humidity'),
    });

    return acc;
  }, []);

  return forecastDataForUi;
};

const prepareTodayDataForUi = (apiWeatherData) => {
  const forecastDataPerDate = mapWeatherDataPerDate(apiWeatherData);
  
  // Parse 3-hours weather data chunks for each date and calculates the needed values for UI.
  const forecastDataForUi = Object.values(forecastDataPerDate).reduce((acc, dateData) => {
    acc.push({
      date: dateData[0].date,
      weather: getMostFrequentValueFromDate(dateData, 'weather'),
      icon: getMostFrequentValueFromDate(dateData, 'icon').replace('n', 'd'), // use only day icons
      tempMin: getMinValueFromDate(dateData, 'temp'),
      tempMax: getMaxValueFromDate(dateData, 'temp'),
      tempSet: dateData.map((chunk) => chunk.temp),
      humidity: getAvgValueFromDate(dateData, 'humidity'),
    });

    return acc;
  }, []);

  return forecastDataForUi;
};

export {
  prepareForecastDataForUi,
  prepareTodayDataForUi
};
