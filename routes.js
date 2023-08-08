const host = 'https://api.openweathermap.org'

export const routes = {
  weather: () => [host, 'data/2.5/find'].join('/'),
};