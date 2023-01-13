import { firstDateData, secondDateData } from '../data-mocks';
import {
  prepareForecastDataForUi,
  prepareTodayDataForUi
} from './weather-data-processing';

const incomingDataMock = {
  "list": [
    ...firstDateData,
    ...secondDateData,
  ]
};

describe('weather-data-processing', () => {
  describe('prepareForecastDataForUi', () => {
    const result = prepareForecastDataForUi(incomingDataMock);
    
    it('should split incoming data into proper quantity of dates', () => {
      expect(result.length).toBe(2);
    });
    
    it('should return the proper data structure for UI', () => {
      result.forEach((forecastDataForUi) => {
        expect(forecastDataForUi).toEqual(expect.objectContaining({
          date: expect.anything(),
          weather: expect.any(String),
          icon: expect.any(String),
          tempMin: expect.any(Number),
          tempMax: expect.any(Number),
          tempSet: expect.any(Array),
          humidity: expect.any(Number),
        }));
      });
    });
  });

  describe('prepareTodayDataForUi', () => {
    const result = prepareTodayDataForUi(incomingDataMock);
    
    it('should split incoming data into proper quantity of dates', () => {
      expect(result.length).toBe(firstDateData.length);
    });
    
    it('should return the proper data structure for UI', () => {
      result.forEach((hourlyDataForUi) => {
        expect(hourlyDataForUi).toEqual(expect.objectContaining({
          date: expect.anything(),
          temp: expect.any(Number),
          feelsLike: expect.any(Number),
          humidity: expect.any(Number),
          windSpeed: expect.any(Number),
          windDeg: expect.any(Number),
          weather: expect.any(String),
          description: expect.any(String),
          icon: expect.any(String),
          dayNight: expect.any(String),
        }));
      });
    });
  });
});
