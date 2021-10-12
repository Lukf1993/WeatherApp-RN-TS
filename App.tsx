import React, { FC } from 'react';
import { ApiContextProvider } from '~context/apiContext';
import MainScreen from '~screens/MainScreen';
import CityScreen from '~screens/CityScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createStackNavigator();

const App: FC = () => {
  return (
    <ApiContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="City" component={CityScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiContextProvider>
  );
};

export default App;
