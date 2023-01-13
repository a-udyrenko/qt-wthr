import './TempScale.scss';

const TempScale = ({ isToday, tempSet }) => (
  <div className="qtw-day-temp-scale-container">
    <div className="qtw-day-temp-scale__timeline">
      <div className="qtw-day-temp-scale__time">00:00</div>
      <div className="qtw-day-temp-scale__time">12:00</div>
      <div className="qtw-day-temp-scale__time">23:59</div>
    </div>
    <div className={`qtw-day-temp-scale ${isToday ? 'qtw-today' : ''}`}>
      {tempSet.map((temp, i) => (
        <div
          key={`${i}-${temp}`}
          className="qtw-day-temp-scale__step"
        >{temp}<span className="qtw-day-temp-scale__step-unit">°C</span></div>
      ))}
    </div>
  </div>
);

export default TempScale;
