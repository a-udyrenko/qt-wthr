import './Today.scss';
import { useContext, useMemo } from 'react';
import { RiTempHotLine, RiContrastDrop2Line, RiWindyLine } from 'react-icons/ri';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';
import {
  getMonthLabel,
  getTimeValueLabel
} from '../../utils/helpers';
import { prepareTodayDataForUi } from '../../utils/weather-data-processing';

const Today = () => {
  const {
    weatherData
  } = useContext(AppContext);

  const dataForUi = useMemo(() => {
    if (weatherData) {
      return prepareTodayDataForUi(weatherData);
    }
  }, [weatherData]);

  const now = new Date();

  return (
    <div className="qtw-today">
      {dataForUi ? (
        <div className="qtw-today__content">

          <div className="qtw-today__now-date">
            <div className="qtw-today__label">
              <span className="qtw-bold">Today, </span>
              <span> {getMonthLabel(dataForUi[0].date)} {dataForUi[0].date.getDate()}</span>
            </div>

            <div className="qtw-today__label">
              <span>{getTimeValueLabel(now)}</span>
            </div>
          </div>

          <div className="qtw-today__content-scroll">
            <div className="qtw-today__now-weather">
              <div className="qtw-today__now-weather-icon">
                <img src={`http://openweathermap.org/img/wn/${dataForUi[0].icon}@4x.png`} alt={dataForUi[0].weather} />
              </div>

              <div className="qtw-today__now-info">
                <span className="qtw-bold"> {dataForUi[0].temp}</span>
                <span>°C, </span>
                <span className="qtw-today__weather-descr">{dataForUi[0].description}</span>
              </div>
            </div>

            <div className="qtw-today__now-details">
              <div className="qtw-today__now-detail-row">
                <RiTempHotLine />
                <span>Feels like: <span className="qtw-bold"> {dataForUi[0].feelsLike}</span><span>°C</span></span>
              </div>
              <div className="qtw-today__now-detail-row">
                <RiContrastDrop2Line />
                <span>Humidity: <span className="qtw-bold"> {dataForUi[0].humidity}</span><span>%</span></span>
              </div>
              <div className="qtw-today__now-detail-row">
                <RiWindyLine />
                <span>Wind speed: <span className="qtw-bold"> {dataForUi[0].windSpeed}</span><span>m/sec</span></span>
              </div>
            </div>

            {dataForUi.map((data) => (
              <div key={data.date.getTime()} className="qtw-today__hour-section">
                <div className="qtw-today__hour-weather-icon">
                  <img src={`http://openweathermap.org/img/wn/${data.icon}@4x.png`} alt={data.weather} />
                </div>

                <div>
                  <span className="qtw-bold"> {data.temp}</span>
                  <span>°C, </span>
                  <span className="qtw-today__weather-descr">{data.description}</span>
                </div>

                <div>{getTimeValueLabel(data.date)}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Today;
