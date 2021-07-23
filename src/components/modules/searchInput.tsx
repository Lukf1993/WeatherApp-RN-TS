import React, { FC } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';

import SearchedItem from '~components/atoms/SearchedItem';

const DATA = [
  {
    city: 'Londyn',
    country: 'Anglia',
    localTime: '2021-07-22 15:24',
    temperatureC: '20',
    temperatureF: '200',
    icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
  },
  {
    city: 'Katowice',
    country: 'Polska',
    localTime: '2021-07-22 15:24',
    temperatureC: '20',
    temperatureF: '200',
    icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
  },
  {
    city: 'Berlin',
    country: 'Niemcy',
    localTime: '2021-07-22 15:24',
    temperatureC: '20',
    temperatureF: '200',
    icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
  },
];

type Props = {
  [key: string]: any;
};

const RenderItem: FC<Props> = ({ item }) => {
  return (
    <SearchedItem
      city={item.city}
      country={item.country}
      localTime={item.localTime}
      temperatureC={item.temperatureC}
      temperatureF={item.temperatureF}
      icon={item.icon}
    />
  );
};

const SearchInput = () => {
  return (
    <View>
      <TextInput style={styles.searchInput} placeholder="City" />
      <FlatList data={DATA} renderItem={RenderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    padding: 15,
    fontSize: 20,
  },
  ListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    padding: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  city: {
    fontSize: 30,
  },
  font20: {
    fontSize: 20,
  },
});

export default SearchInput;
