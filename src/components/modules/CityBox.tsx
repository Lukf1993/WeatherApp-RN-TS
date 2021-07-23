import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Title from '~components/atoms/Title';

type Props = {
  city: string;
  country: string;
  date: string;
  icon: string;
};

const CityBox: FC<Props> = ({ city, country, date, icon }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Title text={city} />
        <Text style={styles.font30}>{country}</Text>
        <Text>{date}</Text>
      </View>
      <Image source={{ uri: `https:${icon}` }} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  font30: {
    fontSize: 30,
  },
  icon: {
    height: 130,
    width: 130,
  },
});

export default CityBox;
