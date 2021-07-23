import React, { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CityBox from '~components/modules/CityBox';

type Favorite = {
  city: string;
  country: string;
  date: string;
  icon: string;
};
type Props = {
  data: Array<Favorite>;
};

const FavoriteView: FC<Props> = ({ data }) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {data.map((item) => {
          <CityBox
            city={item.city}
            country={item.country}
            date={item.date}
            icon={item.icon}
          />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteView;
