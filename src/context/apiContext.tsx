import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
  //   useEffect,
} from 'react';
import axios from 'axios';

const currentData = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1627039870,
    localtime: '2021-07-23 12:31',
  },
  current: {
    last_updated_epoch: 1627038900,
    last_updated: '2021-07-23 12:15',
    temp_c: 22.0,
    temp_f: 71.6,
    is_day: 1,
    condition: {
      text: 'Sunny',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 1000,
    },
    wind_mph: 15.0,
    wind_kph: 24.1,
    wind_degree: 90,
    wind_dir: 'E',
    pressure_mb: 1018.0,
    pressure_in: 30.5,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 61,
    cloud: 0,
    feelslike_c: 24.3,
    feelslike_f: 75.8,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 6.0,
    gust_mph: 11.9,
    gust_kph: 19.1,
    air_quality: {
      co: 213.60000610351562,
      no2: 16.5,
      o3: 45.79999923706055,
      so2: 10.399999618530273,
      pm2_5: 4.199999809265137,
      pm10: 7.0,
      'us-epa-index': 1,
      'gb-defra-index': 1,
    },
  },
};
const astronomyData = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1627039962,
    localtime: '2021-07-23 12:32',
  },
  astronomy: {
    astro: {
      sunrise: '05:10 AM',
      sunset: '09:03 PM',
      moonrise: '08:23 PM',
      moonset: '02:41 AM',
      moon_phase: 'Waxing Gibbous',
      moon_illumination: '87',
    },
  },
};

type Props = {
  children: ReactNode;
};

const ApiContext = createContext({});

export const ApiContextProvider: FC<Props> = ({ children }) => {
  const API_KEY: string = '02e2fc9543714b12899111113212107';
  const API_URL: string = 'http://api.weatherapi.com/v1/';

  const [searchData, setSearchData] = useState([]);

  const searchCity = (city: string) => {
    axios
      .get(`${API_URL}search.json?key=${API_KEY}&q=${city}`)
      .then((res) => setSearchData(res.data))
      .catch((res) => console.log(res));
  };

  return (
    <ApiContext.Provider
      value={{ currentData, astronomyData, searchData, searchCity }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
