import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CityBox from '~components/modules/CityBox';
import CityDetailBox from '~components/modules/CityDetailBox';

const data = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1626963849,
    localtime: '2021-07-22 15:24',
  },
  current: {
    last_updated_epoch: 1626963300,
    last_updated: '2021-07-22 15:15',
    temp_c: 27.0,
    temp_f: 80.6,
    is_day: 1,
    condition: {
      text: 'Sunny',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 1000,
    },
    wind_mph: 11.9,
    wind_kph: 19.1,
    wind_degree: 110,
    wind_dir: 'ESE',
    pressure_mb: 1022.0,
    pressure_in: 30.7,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 51,
    cloud: 0,
    feelslike_c: 27.0,
    feelslike_f: 80.7,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 7.0,
    gust_mph: 7.8,
    gust_kph: 12.6,
  },
};

const CityView = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CityBox
          city={data.location.name}
          country={data.location.country}
          date={data.location.localtime}
          icon={data.current.condition.icon}
        />
        <CityDetailBox />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityView;
