import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type ItemList = {
    city: string
    country: string
    localTime: string
    temperatureC: string
    temperatureF: string
  }

const SearchedItem = ({city, country, localTime, temperatureC, temperatureF}: ItemList) => {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.font30}>{city}</Text>
          <Text style={styles.font20}>{country}</Text>
        </View>
        <View>
          <Text style={styles.font40}>{temperatureC}C/{temperatureF}F</Text>
          <Text style={styles.font20}>{localTime}</Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderStyle: 'solid',
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      padding: 15,
      marginRight:15,
      marginLeft:15
    },
    font40: {
      fontSize: 40,
    },
    font30: {
      fontSize: 30,
    },
    font20: {
      fontSize: 20,
    }
  });

  export default SearchedItem;