import React, { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CityBox from '~components/modules/CityBox';
import CityDetailBox from '~components/modules/CityDetailBox';
import { ICurrent, ILocation } from '~services/models/Defaults.interface';
import { RouteProp, useRoute } from '@react-navigation/native';

interface IParams {
  location: ILocation
  current: ICurrent
}


type TParamList = {
  Detail: IParams
}

const CityScreen:FC = () => {
  const route =  useRoute<RouteProp<TParamList, 'Detail'>>();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CityBox
          name={route.params.location.name}
          country={route.params.location.country}
          localtime={route.params.location.localtime}
          icon={route.params.current.condition.icon}
        />
        <CityDetailBox data={route.params.current} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityScreen;
