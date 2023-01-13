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
import TempScale from '../TempScale/TempScale';

const Forecast = () => {
  const {
    weatherData
  } = useContext(AppContext);

  const dataForUi = useMemo(() => {
    if (weatherData) {
      return prepareForecastDataForUi(weatherData);
    }
  }, [weatherData]);

  return (
    <div className="qtw-forecast">
      {dataForUi ? (
        <div className="qtw-forecast__content">
          {dataForUi.map((dateData, dateDataIndex) => (
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
                  <div>
                    <span className="qtw-forecast__day-temp-arrow-up"><RiArrowUpLine /></span>
                    <span>Max:</span>
                    <span className="qtw-bold"> {dateData.tempMax}</span>
                    <span>°C</span>
                  </div>
                  <div>
                    <span className="qtw-forecast__day-temp-arrow-down"><RiArrowDownLine /></span>
                    <span>Min:</span>
                    <span className="qtw-bold"> {dateData.tempMin}</span>
                    <span>°C</span>
                  </div>
                </div>

                <div className="qtw-forecast__day-weather">
                  <div className="qtw-forecast__day-weather-icon">
                    <img src={`http://openweathermap.org/img/wn/${dateData.icon}@4x.png`} alt={dateData.weather} />
                  </div>
                </div>
              </div>

              <TempScale isToday={dateDataIndex === 0} tempSet={dateData.tempSet} />

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
