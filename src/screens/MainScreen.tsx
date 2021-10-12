import React, { FC, useState } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';
import SearchInput from '~components/modules/SearchInput';
import CityBox from '~components/modules/CityBox';
import { useApiContext } from '~context/apiContext';
import Title from '~components/atoms/Title';
import { IContext, IFavorite } from '~services/models/Defaults.interface';
import { useNavigation } from '@react-navigation/native';

const MainScreen:FC<IContext> = () => {
  const [isOpen, setOpen] = useState<string>('')

  const apiContext = useApiContext();
  const navigation = useNavigation();

  const toggleMenu = (value: string) => {
    if(value === isOpen) {
      setOpen('')
    } else {
      setOpen(value)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Choose your city</Text>
          <SearchInput />
        </View>
        <View style={styles.center}>
          <Title text="Favorite" />
        </View>
         {apiContext?.favorite.length === 0 ? (
          <View style={styles.center}>
            <Text style={styles.font20}>You don't have favorites yet</Text>
          </View>
        ) : (
          apiContext?.favorite.map((item: IFavorite, index: number) => (
            <TouchableOpacity
              key={item.location.name + index}
              onPress={() =>
                navigation.navigate('City', {
                  location: item.location,
                  current: item.current,
                })
              }
              delayLongPress={100}
              onLongPress={() => toggleMenu(item.location.name)}
              >
              <CityBox
                name={item.location.name}
                country={item.location.country}
                localtime={item.location.localtime}
                icon={item.current.condition.icon}
              />
              {isOpen === item.location.name &&
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => apiContext?.deleteFromFavorite(item.location.name)}>
                   <Text style={styles.buttonText}> Delete</Text>
                  </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => apiContext?.updateFavorite()}>
                    <Text style={styles.buttonText}>Update</Text>
                  </TouchableOpacity>
              </>
              }
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },
  font20: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'grey',
  },
  buttonText: {
    padding: 20,
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 1
  }

});

export default MainScreen;
