import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
  //   useEffect,
} from 'react';
import axios from 'axios';

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

type Favorite = {
  location: {
    name: string;
  };
  current: object;
};

type FavoriteArr = Array<Favorite>;

const ApiContext = createContext({});

export const ApiContextProvider: FC<Props> = ({ children }) => {
  const API_KEY: string = '02e2fc9543714b12899111113212107';
  const API_URL: string = 'http://api.weatherapi.com/v1/';

  const [searchData, setSearchData] = useState([]);
  const [favorite, setFavorite] = useState<FavoriteArr>([]);

  const searchCity = (city: string) => {
    axios
      .get(`${API_URL}search.json?key=${API_KEY}&q=${city}`)
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((res) => console.log(res));
  };
  const addToFavorite = (city: string) => {
    axios
      .get(`${API_URL}current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then((res) => {
        setFavorite([...favorite, res.data]);
      })
      .catch((res) => console.log(res));
  };

  return (
    <ApiContext.Provider
      value={{
        astronomyData,
        searchData,
        searchCity,
        addToFavorite,
        favorite,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
