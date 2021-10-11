import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Title from '~components/atoms/Title';
import { ILocation } from '~services/models/Defaults.interface';

interface IProps extends ILocation {
  icon: string
}

const CityBox: FC<IProps> = ({ name, country, localtime, icon }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Title text={name} />
        <Text style={styles.font30}>{country}</Text>
        <Text>{localtime}</Text>
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
