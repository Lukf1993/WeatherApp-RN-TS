import React, { FC } from 'react';
import { ApiContextProvider } from '~context/apiContext';
// import MainView from '~screens/MainView';
import CityView from '~screens/CityView';
// import FavoriteView from '~screens/FavoriteView';

const App: FC = () => {
  return (
    <ApiContextProvider>
      <CityView />
    </ApiContextProvider>
  );
};

export default App;
