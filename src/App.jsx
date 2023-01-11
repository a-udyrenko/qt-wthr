import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppContext from './context/AppContext';
import useUserLocation from './hooks/useUserLocation';
import { getWeatherData } from './utils/api';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const userLocation = useUserLocation();

  useEffect(() => {
    const isUserLocationMissing = !userLocation.latitude || !userLocation.longitude;
    if (isUserLocationMissing) return;

    getWeatherData({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude
    }).then(({ data }) => setWeatherData(data));

  }, [userLocation.latitude, userLocation.longitude]);

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
