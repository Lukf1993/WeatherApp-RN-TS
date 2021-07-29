import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import  {fetchData}  from '~services/api';

type Props = {
  children: ReactNode;
};

type FavoriteArr = Array<FavoriteData>;

type FavoriteData = {
  location: {
    name: string
  };
  current: unknown;
  astro: unknown;
};

type Search = {
  name: string;
  region: string;
  country: string;
};

type SearchData = {
  data: Array<Search>;
};
const API_KEY = '02e2fc9543714b12899111113212107';

const ApiContext = createContext({});

export const ApiContextProvider: FC<Props> = ({ children }) => {

  const [searchData, setSearchData] = useState<SearchData>();
  const [favorite, setFavorite] = useState<FavoriteArr>([]);

  const searchCity = (city: string) => {
    fetchData(`search.json?key=${API_KEY}&q=${city}`).then(res => setSearchData(res.data)) ;
  }

  const addToFavorite = (city: string) => {
    fetchData(`current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(res => {
        fetchData(`astronomy.json?key=${API_KEY}&q=${city}&dt=2021-07-28`)
          .then(r => {
            setFavorite([
              ...favorite,
               { location: res.location,
                current: res.current,
                astro: r.data.astronomy.astro,}
            ])
          })
      })
  };

  return (
    <ApiContext.Provider
      value={{
        addToFavorite,
        searchCity,
        searchData,
        favorite
      }}>
      {children}
    </ApiContext.Provider>
  )
};

export const useApiContext = () => useContext(ApiContext);



