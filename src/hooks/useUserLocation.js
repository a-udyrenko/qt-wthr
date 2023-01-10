import { useEffect, useState } from 'react';
import { getReverseGeoData } from '../utils/api';
import { DEFAULT_LOCATION } from '../constants';

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userLocationData, setUserLocationData] = useState(null);

  useEffect(() => {
    if (userLocation) {
      const { latitude, longitude } = userLocation;

      // Get data for detected user location
      getReverseGeoData({ latitude, longitude })
        .then(({ data }) => {
          console.log('GEOCODED?', data);
          setUserLocationData(data[0]);
        });
    } else {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          const {
            coords: { latitude, longitude },
          } = data;

          console.log('Location detected!', data);
          setUserLocation({ latitude, longitude });
        },
        (err) => {
          console.error('Location access denied', err);
          setUserLocation(DEFAULT_LOCATION);
        }
      );
    }
  }, [userLocation]);

  return {
    latitude: userLocation && userLocation.latitude,
    longitude: userLocation && userLocation.longitude,
    data: userLocationData
  };
};

export default useUserLocation;
