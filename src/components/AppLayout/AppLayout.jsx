import './AppLayout.scss';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Flag from 'react-svg-country-flags'
import AppContext from '../../context/AppContext';

const AppLayout = () => {
  const {
    userLocation,
  } = useContext(AppContext);

  const getNavLinkClass = ({ isActive }) =>
    isActive ?
      "qtw-nav__link qtw-active" :
      "qtw-nav__link";

  return (
    <div className="qtw-app">
      <div className="qtw-app-header">
        <div className="qtw-user-location">
          {userLocation.data ? (
            <>
              <Flag country={userLocation.data.country} className='' />
              <span>{userLocation.data.name}</span>
            </>
          ) : (
            <span className="qtw-user-location__loading">Getting location data...</span>
          )}
        </div>
      </div>

      <div className="qtw-app-nav">
        <ul className="qtw-nav">
          <li className="qtw-nav__item">
            <NavLink
              to="/today"
              className={getNavLinkClass}
            >
              Today
            </NavLink>
          </li>
          <li className="qtw-nav__item">
            <NavLink
              to="/forecast"
              className={getNavLinkClass}
            >
              Forecast
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="qtw-app-body">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
