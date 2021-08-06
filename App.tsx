import React, { FC } from 'react';
import { ApiContextProvider } from '~context/apiContext';
import MainView from '~screens/MainView';
// import CityView from '~screens/CityView';
import FavoriteView from '~screens/FavoriteView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <MainView />;
}
function Favorite() {
  return <FavoriteView />;
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
            },
            style: {
              height: 50,
              paddingBottom: 15,
            },
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiContextProvider>
  );
};

export default App;
