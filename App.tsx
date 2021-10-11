import React, { FC } from 'react';
import { ApiContextProvider } from '~context/apiContext';
import MainScreen from '~screens/MainScreen';
import CityScreen from '~screens/CityScreen';
import FavoriteScreen from '~screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const FavoriteStack = createStackNavigator();

const FavoriteStackNavigator = () => {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
      <FavoriteStack.Screen name="City" component={CityScreen} />
    </FavoriteStack.Navigator>
  )
}
const App: FC = () => {


  return (
    <ApiContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            labelStyle: {
              fontSize: 20,
              padding: 15,
            },
            style: {
              height: 50,
            },
          }}>
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="Favorite" component={FavoriteStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiContextProvider>
  );
};

export default App;
