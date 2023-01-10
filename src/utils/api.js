import axios from 'axios';
import { OPEN_WEATHER_KEY } from '../constants';

const getWeatherApiUrl = ({ latitude, longitude }) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}`;

const getReverseGeoApiUrl = ({ latitude, longitude }) =>
  `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${OPEN_WEATHER_KEY}`;

const getWeatherData = ({ latitude, longitude }) =>
  axios.get(getWeatherApiUrl({ latitude, longitude }));

const getReverseGeoData = ({ latitude, longitude }) =>
  axios.get(getReverseGeoApiUrl({ latitude, longitude }));

export {
  getWeatherData,
  getReverseGeoData
};
