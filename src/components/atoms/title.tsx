import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
};

const Title: FC<Props> = ({ text }) => <Text style={styles.title}>{text}</Text>;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600',
  },
});

export default Title;
