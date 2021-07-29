import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CityBox from '~components/modules/CityBox';
import CityDetailBox from '~components/modules/CityDetailBox';
import { useRoute } from '@react-navigation/native';

type Props = {
  [key: string]: any;
};

const CityView = () => {
  const route: Props = useRoute();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CityBox
          city={route.params.location.name}
          country={route.params.location.country}
          date={route.params.location.localtime}
          icon={route.params.current.condition.icon}
        />
        <CityDetailBox data={route.params.current} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityView;
