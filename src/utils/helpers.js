const getMinValueFromDate = (dateData, key) => Math.min(...dateData.map(chunk => chunk[key]));
const getMaxValueFromDate = (dateData, key) => Math.max(...dateData.map(chunk => chunk[key]));

const getAvgValueFromDate = (dateData, key) => {
  const sum = dateData.map((chunk) => chunk[key]).reduce((acc, value) => acc + value, 0);
  return Math.round(sum / dateData.length);
};

const getMostFrequentValueFromDate = (dateData, key) => {
  const values = dateData.map((chunk) => chunk[key]);

  const hashmap = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {})

  return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b);
}

const getWeekDayLabel = (date) => new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
const getMonthLabel = (date) => new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);

const getTimeValueForLabel = (value) => value.toString().length > 1 ? value : `0${value}`;
const getTimeValueLabel = (date) => `${getTimeValueForLabel(date.getHours())}:${getTimeValueForLabel(date.getMinutes())}`;

export {
  getMinValueFromDate,
  getMaxValueFromDate,
  getAvgValueFromDate,
  getMostFrequentValueFromDate,
  getWeekDayLabel,
  getMonthLabel,
  getTimeValueLabel
};
