import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { useApiContext } from '~context/apiContext';

import SearchedItem from '~components/atoms/SearchedItem';

type Props = {
  [key: string]: any;
};
type Context = Props;

const SearchInput: FC<Props> = () => {
  const apiContext: Context = useApiContext();

  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    apiContext.searchCity(value);
  };

  return (
    <View>
      <TextInput
        onChange={onChange}
        style={styles.searchInput}
        placeholder="City"
      />
      {apiContext.searchData.map((item: Props) => (
        <SearchedItem name={item.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    padding: 15,
    fontSize: 20,
  },
});

export default SearchInput;
