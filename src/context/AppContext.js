import { createContext } from 'react';

const AppContext = createContext({
  location: null,
  weatherData: null,
});

export default AppContext;
