import React from 'react';
import { ApiContextProvider } from '~context/apiContext';
import MainView from '~screens/MainScreen';
import CityView from '~screens/CityScreen';
import FavoriteView from '~screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ApiContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            labelStyle: {
              fontSize: 20,
            },
            style: {
              height: 50,
              paddingBottom: 15,
            },
          }}>
          <Tab.Screen name="Home" component={MainView} />
          <Tab.Screen name="Favorite" component={FavoriteView} />
          <Tab.Screen name="City" component={CityView} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiContextProvider>
  );
};

export default App;
