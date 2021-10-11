import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useApiContext } from '~context/apiContext';

interface IProps {
  name: string
}

const SearchedItem: FC<IProps> = ({ name}) => {
  const apiContext = useApiContext();

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.font30}>{name}</Text>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => apiContext?.addToFavorite(name, date)}>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/social-media-rewards-rating-1/512/129_star_social_media_reward_rating_social-512.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
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
  font30: {
    fontSize: 30,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default SearchedItem;
