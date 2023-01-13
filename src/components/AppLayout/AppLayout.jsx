import './AppLayout.scss';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import UserLocation from '../UserLocation/UserLocation';
import AppNavigation from '../AppNavigation/AppNavigation';

const AppLayout = () => {
  const {
    userLocation,
  } = useContext(AppContext);

  return (
    <div className="qtw-app">
      <div className="qtw-app-header">
        <UserLocation locationData={userLocation.data} />
      </div>

      <div className="qtw-app-nav">
        <AppNavigation />
      </div>

      <div className="qtw-app-body">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
