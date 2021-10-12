import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SearchInput from '~components/modules/SearchInput';
import CityBox from '~components/modules/CityBox';
import { useApiContext } from '~context/apiContext';
import Title from '~components/atoms/Title';
import { IContext, IFavorite } from '~services/models/Defaults.interface';
import { useNavigation } from '@react-navigation/native';

const MainScreen:FC<IContext> = () => {
  const apiContext = useApiContext();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Choose your city</Text>
          <SearchInput />
        </View>
        <View style={styles.center}>
          <Title text="Favorite" />
        </View>
         {apiContext?.favorite.length === 0 ? (
          <View style={styles.center}>
            <Text style={styles.font20}>You don't have favorites yet</Text>
          </View>
        ) : (
          apiContext?.favorite.map((item: IFavorite, index: number) => (
            <TouchableOpacity
              key={item.location.name + index}
              onPress={() =>
                navigation.navigate('City', {
                  location: item.location,
                  current: item.current,
                })
              }>
              <CityBox
                name={item.location.name}
                country={item.location.country}
                localtime={item.location.localtime}
                icon={item.current.condition.icon}
              />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },
  font20: {
    fontSize: 20,
  },
});

export default MainScreen;
