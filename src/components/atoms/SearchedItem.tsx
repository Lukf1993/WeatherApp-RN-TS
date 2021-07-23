import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  name: string;
};

const SearchedItem: FC<Props> = ({ name }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.font30}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    padding: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  font30: {
    fontSize: 30,
  },
});

export default SearchedItem;
