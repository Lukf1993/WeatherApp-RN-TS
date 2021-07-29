import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  value: string | number;
};

const CityDetailBar: FC<Props> = ({ title, value }) => {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
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
    borderBottomWidth: 1,
  },
});

export default CityDetailBar;
