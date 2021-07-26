import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import CityBox from '~components/modules/CityBox';
import { useApiContext } from '~context/apiContext';
import Title from '~components/atoms/Title';

type Props = {
  [key: string]: any;
};
type Favorite = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    condition: {
      icon: string;
    };
  };
};

const FavoriteView = () => {
  const apiContext: Props = useApiContext();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.center}>
          <Title text="Favorite" />
        </View>
        {apiContext.favorite.length === 0 ? (
          <View style={styles.center}>
            <Text style={styles.font20}>You don't have favorites yet</Text>
          </View>
        ) : (
          apiContext.favorite.map((item: Favorite, index: number) => (
            <CityBox
              key={item.location.name + index}
              city={item.location.name}
              country={item.location.country}
              date={item.location.localtime}
              icon={item.current.condition.icon}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  font20: {
    fontSize: 20,
  },
});

export default FavoriteView;
