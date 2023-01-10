import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Flag from 'react-svg-country-flags'
import AppContext from '../context/AppContext';

const AppLayout = () => {
  const {
    userLocation,
  } = useContext(AppContext);

  return (
    <div className="qtw-app">
      <h1>THE QT Weather Context</h1>
      {userLocation.data ? (
        <>
          <h2>Location: {userLocation.data.name}</h2>
          <Flag country={userLocation.data.country} className='' />
        </>
      ) : (
        <h2>Getting location data...</h2>
      )}
      <ul>
        <li><Link to="/forecast">Forecast</Link></li>
        <li><Link to="/today">Today</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
