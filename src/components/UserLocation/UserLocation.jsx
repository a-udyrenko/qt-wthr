import './UserLocation.scss';
import Flag from 'react-svg-country-flags';

const UserLocation = ({ locationData }) => (
  <div className="qtw-user-location">
    {locationData ? (
      <>
        <Flag country={locationData.country} className='' />
        <span>{locationData.name}</span>
      </>
    ) : (
      <span className="qtw-user-location__loading">Getting location data...</span>
    )}
  </div>
);

export default UserLocation;
