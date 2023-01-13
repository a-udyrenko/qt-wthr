// Riga
const DEFAULT_LOCATION = { latitude: 56.9677, longitude: 24.1056 };

// Yeah, that's kinda creative way to not expose the API key in a super-obvious way in sources
const OPEN_WEATHER_KEY_OBFUSCATED = process.env.REACT_APP_OWKO;
const OPEN_WEATHER_KEY = OPEN_WEATHER_KEY_OBFUSCATED.split(',').map((i) => isNaN(+i) ? i : (+i / 42)).join('');

export { DEFAULT_LOCATION, OPEN_WEATHER_KEY };
