import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MainView from '~screens/MainView';
import CityView from '~screens/CityView';

const App: FC = () => {
  return (
    <CityView />
    // <MainView />
    // <SafeAreaView>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <View>
    //       <Text style={styles.title}>Choose your city</Text>

    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
