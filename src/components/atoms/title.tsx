import React from 'react';
import { Text, StyleSheet } from 'react-native';

type title = {
    text: string
}

const Title = ({text}: title) => <Text style={styles.title}>{text}</Text>

const styles = StyleSheet.create({
    title: {
      marginTop: 20,
      fontSize: 40,
      fontWeight: '600',
    },
});

export default Title;