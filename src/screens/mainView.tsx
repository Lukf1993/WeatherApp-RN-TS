import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchInput from '~components/modules/searchInput';

const MainView = () => {
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                <Text style={styles.title}>Choose your city</Text>
                <SearchInput />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
      marginTop: 20,
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center'
    },
});

export default MainView;