import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect
} from 'react';
import { IFavorite, ISearch, IContext } from '~services/models/Defaults.interface';
import { fetchData } from '~services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface IProps {
  children: ReactNode;
}

const API_KEY = '02e2fc9543714b12899111113212107';

const ApiContext = createContext<IContext | null>(null);

export const ApiContextProvider: FC<IProps> = ({ children }) => {
  const [searchData, setSearchData] = useState<ISearch[]>([]);
  const [favorite, setFavorite] = useState<IFavorite[]>([]);

  const storeData = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.error(e)
    }
  }

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.error(e)
    }
  }

  const searchCity = async (city: string) => {
    fetchData(`search.json?key=${API_KEY}&q=${city}`).then((data) =>
      setSearchData(data),
    );
  };

  const addToFavorite = (city: string, date: string) => {
    fetchData(`current.json?key=${API_KEY}&q=${city}&aqi=no`).then((res) => {
      fetchData(`astronomy.json?key=${API_KEY}&q=${city}&dt=${date}`).then(
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

  useEffect(() => {
    async function getStoredData() {
      const value = await getData('favorite')
      setFavorite(value)
    }
    getStoredData()
  }, [])

  useEffect(() => {
    storeData('favorite', favorite)
  }, [favorite])

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
