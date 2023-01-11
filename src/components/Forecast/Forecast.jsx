import './Forecast.scss';
import { useContext, useMemo } from 'react';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';
import {
  getWeekDayLabel,
  getMonthLabel
} from '../../utils/helpers';
import { prepareForecastDataForUi } from '../../utils/weather-data-processing';

const Forecast = () => {
  const {
    weatherData
  } = useContext(AppContext);

  const weatherDataPreparedForUi = useMemo(() => {
    if (weatherData) {
      return prepareForecastDataForUi(weatherData);
    }
  }, [weatherData]);

  console.log('weatherDataPreparedForUi RF?', {weatherData, weatherDataPreparedForUi});

  return (
    <div className="qtw-forecast">
      {weatherDataPreparedForUi ? (
        <div className="qtw-forecast__content">
          {weatherDataPreparedForUi.map((dateData, dateDataIndex) => (
            <div
              className="qtw-forecast__day-section"
              key={dateData.date.getDate()}
            >
              <div className="qtw-forecast__day-label">
                {dateDataIndex === 0 && (
                  <span className="qtw-bold">Today, </span>
                )}
                {dateDataIndex === 1 && (
                  <span className="qtw-bold">Tomorrow, </span>
                )}
                {dateDataIndex > 1 && (
                  <span className="qtw-bold">{getWeekDayLabel(dateData.date)}, </span>
                )}
                <span>{getMonthLabel(dateData.date)} {dateData.date.getDate()}</span>
              </div>

              <div className="qtw-forecast__day-data">
                <div className="qtw-forecast__day-temp-data">
                  <div className="qtw-forecast__day-temp-label">
                    <span className="qtw-forecast__day-temp-arrow-up"><RiArrowUpLine /></span>
                    <span>Max:</span>
                    <span className="qtw-bold"> {dateData.tempMax}</span>
                    <span> °C</span>
                  </div>
                  <div className="qtw-forecast__day-temp-label">
                    <span className="qtw-forecast__day-temp-arrow-down"><RiArrowDownLine /></span>
                    <span>Min:</span>
                    <span className="qtw-bold"> {dateData.tempMin}</span>
                    <span> °C</span>
                  </div>
                </div>

                <div className="qtw-forecast__day-weather">
                  <div className="qtw-forecast__day-weather-icon">
                    <img src={`http://openweathermap.org/img/wn/${dateData.icon}@4x.png`} alt={dateData.weather} />
                  </div>
                </div>
              </div>

              <div className="qtw-day-temp-scale-container">
                <div className="qtw-day-temp-scale__timeline">
                  <div className="qtw-day-temp-scale__time">00:00</div>
                  <div className="qtw-day-temp-scale__time">12:00</div>
                  <div className="qtw-day-temp-scale__time">23:59</div>
                </div>
                <div className={`qtw-day-temp-scale ${dateDataIndex === 0 ? 'qtw-today' : ''}`}>
                  {dateData.tempSet.map((temp, i) => (
                    <div
                      key={i}
                      className="qtw-day-temp-scale__step"
                    >{temp}<span className="qtw-day-temp-scale__step-unit"> °C</span></div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Forecast;
