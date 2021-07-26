import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CityBox from '~components/modules/CityBox';
import { useApiContext } from '~context/apiContext';

type Props = {
  [key: string]: any;
};
type Favorite = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    condition: {
      icon: string;
    };
  };
};

const FavoriteView = () => {
  const apiContext: Props = useApiContext();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {apiContext.favorite.map((item: Favorite, index: number) => (
          <CityBox
            key={item.location.name + index}
            city={item.location.name}
            country={item.location.country}
            date={item.location.localtime}
            icon={item.current.condition.icon}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteView;
