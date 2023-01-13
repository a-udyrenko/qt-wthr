import './ErrorBoundary.scss';

const ErrorBoundary = () => {
  return (
    <div className="qtw-error-boundary">
      <h1>Oops, something went wrong!</h1>
      <p>Please try to reload the page</p>
      <p>
        <img src={`http://openweathermap.org/img/wn/11d@4x.png`} alt="Something went wrong!" />
      </p>
    </div>
  )
};

export default ErrorBoundary;
