import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { IFavorite, ISearch, IContext } from '~services/models/Defaults.interface';
import { fetchData } from '~services/api';

interface IProps {
  children: ReactNode;
}

const API_KEY = '02e2fc9543714b12899111113212107';

const ApiContext = createContext<IContext | null>(null);

export const ApiContextProvider: FC<IProps> = ({ children }) => {
  const [searchData, setSearchData] = useState<ISearch[]>([]);
  const [favorite, setFavorite] = useState<IFavorite[]>([]);

  const searchCity = async (city: string) => {
    fetchData(`search.json?key=${API_KEY}&q=${city}`).then((data) =>
      setSearchData(data),
    );
  };

  const addToFavorite = (city: string) => {
    fetchData(`current.json?key=${API_KEY}&q=${city}&aqi=no`).then((res) => {
      fetchData(`astronomy.json?key=${API_KEY}&q=${city}&dt=2021-07-28`).then(
        (r) => {
         const checkFavorite = favorite.find(item => city.includes(item.location.name))
         if(!checkFavorite) {
           setFavorite([
             ...favorite,
             {
               location: res.location,
               current: res.current,
               astro: r.astronomy.astro,
             },
           ]);
         }
        },
      );
    });
  };

  const context: IContext = {
    addToFavorite,
    searchCity,
    searchData,
    favorite
  }
  return (
    <ApiContext.Provider
      value={context}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
