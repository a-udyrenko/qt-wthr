import './AppNavigation.scss';
import { NavLink } from 'react-router-dom';

const getNavLinkClass = ({ isActive }) =>
  isActive ?
    'qtw-nav__link qtw-active' :
    'qtw-nav__link';

const AppNavigation = () => (
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
);

export default AppNavigation;
