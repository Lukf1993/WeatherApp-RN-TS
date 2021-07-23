import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type ItemList = {
  city: string;
  country: string;
  localTime: string;
  temperatureC: string;
  temperatureF: string;
  icon: string;
};

const SearchedItem = ({
  city,
  country,
  localTime,
  temperatureC,
  temperatureF,
  icon,
}: ItemList) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.flex}>
        <Text style={styles.font30}>{city}</Text>
        <Text style={styles.font20}>{country}</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https:${icon}`,
        }}
      />
      <View>
        <Text style={styles.font40}>
          {temperatureC}C/{temperatureF}F
        </Text>
        <Text style={styles.font20}>{localTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
  font40: {
    fontSize: 40,
  },
  font30: {
    fontSize: 30,
  },
  font20: {
    fontSize: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  flex: {
    flex: 1,
  },
});

export default SearchedItem;
