import axios from 'axios';
import {
  getWeatherData,
  getReverseGeoData
} from './api';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('api', () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('getWeatherData', () => {
    it('should fetch data with proper params', () => {
      getWeatherData({
        latitude: '41',
        longitude: '42'
      });

      const argValue = axios.get.mock.calls[0][0];
      const isProperLat = argValue.includes(`lat=${41}`);
      const isProperLon = argValue.includes(`lon=${42}`);

      expect(axios.get).toHaveBeenCalled();
      expect(isProperLat).toBe(true);
      expect(isProperLon).toBe(true);
    });
  });

  describe('getReverseGeoData', () => {
    it('should fetch data with proper params', () => {
      getReverseGeoData({
        latitude: '43',
        longitude: '44'
      });

      const argValue = axios.get.mock.calls[0][0];
      const isProperLat = argValue.includes(`lat=${43}`);
      const isProperLon = argValue.includes(`lon=${44}`);

      expect(axios.get).toHaveBeenCalled();
      expect(isProperLat).toBe(true);
      expect(isProperLon).toBe(true);
    });
  });
});
