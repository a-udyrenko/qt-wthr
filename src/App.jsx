import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AppContext from './context/AppContext';
import useUserLocation from './hooks/useUserLocation';
import { getWeatherData } from './utils/api';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const userLocation = useUserLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const isUserLocationMissing = !userLocation.latitude || !userLocation.longitude;
    if (isUserLocationMissing) return;

    getWeatherData({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude
    }).then(({ data }) => {
      setWeatherData(data);
    }).catch((err) => {
      navigate('/error');
    });

  }, [userLocation.latitude, userLocation.longitude, navigate]);

  const contextValue = {
    userLocation,
    weatherData
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Outlet />
    </AppContext.Provider>
  );
}

export default App;
