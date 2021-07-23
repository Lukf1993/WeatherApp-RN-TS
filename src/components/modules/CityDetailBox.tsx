import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  const CityDetailBox = () => {
      return (
          <>
        <View style={styles.flex}>
            <Text style={styles.text}>Last Update:</Text>
            <Text style={styles.text}>2021-07-22 15:15</Text>
        </View>
            <View>
            <Text style={styles.text}>Condition:</Text>
            <Text style={styles.text}>Temp: </Text>
            <Text style={styles.text}>Feels Temp: </Text>
            <Text style={styles.text}>Wind: </Text>
            <Text style={styles.text}>Pressure: </Text>
            <Text style={styles.text}>Percipe: </Text>
            <Text style={styles.text}>Humidity: </Text>
            <Text style={styles.text}>Cloud: </Text>
            <Text style={styles.text}>UV: </Text>
            <Text style={styles.text}>Gust: </Text>
        </View>
        </>
      )
  };
  
  const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        padding: 15,

    }, 
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderBottomWidth: 1
    }
  })

  export default CityDetailBox;