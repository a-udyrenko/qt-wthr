import {
  getMinValueFromDate,
  getMaxValueFromDate,
  getAvgValueFromDate,
  getMostFrequentValueFromDate,
  getWeekDayLabel,
  getMonthLabel,
  getTimeValueLabel
} from './helpers';


describe('helpers', () => {
  describe('getMinValueFromDate', () => {
    it('should return the minimum value determined by key', () => {
      const dateData = [
        {
          targetValue: 5,
          someOtherValue: 'foobar',
        },
        {
          targetValue: 55,
          someOtherValue: 'foobar',
        },
        {
          targetValue: 555,
          someOtherValue: 'foobar',
        },
      ];

      expect(getMinValueFromDate(dateData, 'targetValue')).toBe(5);
    });
  });

  describe('getMaxValueFromDate', () => {
    it('should return the maximum value determined by key', () => {
      const dateData = [
        {
          targetValue: 5,
          someOtherValue: 'foobar',
        },
        {
          targetValue: 55,
          someOtherValue: 'foobar',
        },
        {
          targetValue: 555,
          someOtherValue: 'foobar',
        },
      ];

      expect(getMaxValueFromDate(dateData, 'targetValue')).toBe(555);
    });
  });

  describe('getAvgValueFromDate', () => {
    it('should return the average value determined by key', () => {
      const dateData = [
        {
          targetValue: 5,
          someOtherValue: 'foobar',
        },
        {
          targetValue: 10,
          someOtherValue: 'foobar',
        },
        {
          targetValue: 15,
          someOtherValue: 'foobar',
        },
      ];

      const expected = (5 + 10 + 15) / 3;

      expect(getAvgValueFromDate(dateData, 'targetValue')).toBe(expected);
    });
  });

  describe('getMostFrequentValueFromDate', () => {
    it('should return the most frequently occurred value determined by key', () => {
      const dateData = [
        {
          targetValue: 'baz',
          someOtherValue: 'bar',
        },
        {
          targetValue: 'foo',
          someOtherValue: 'bar',
        },
        {
          targetValue: 'baz',
          someOtherValue: 'bar',
        },
      ];

      expect(getMostFrequentValueFromDate(dateData, 'targetValue')).toBe('baz');
    });
  });

  describe('getWeekDayLabel', () => {
    it('should return the correct week day label', () => {
      const date = new Date('2023-01-01T01:25:00');

      expect(getWeekDayLabel(date)).toBe('Sunday');
    });
  });

  describe('getMonthLabel', () => {
    it('should return the correct month label', () => {
      const date = new Date('2023-01-01T01:25:00');

      expect(getMonthLabel(date)).toBe('Jan');
    });
  });

  describe('getTimeValueLabel', () => {
    it('should return correct time label', () => {
      const date = new Date('2023-01-01T01:25:00');

      expect(getTimeValueLabel(date)).toBe('01:25');
    });
  });
});
