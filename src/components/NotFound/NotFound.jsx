import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="qtw-not-found">
      <h1>Page not found!</h1>
      <p>Please use the app navigation</p>
      <p>
        <img src={`http://openweathermap.org/img/wn/02d@4x.png`} alt="Not found" />
      </p>
    </div>
  )
};

export default NotFound;
