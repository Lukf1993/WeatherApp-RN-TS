import React from 'react';
import {
    SafeAreaView,
    ScrollView,
  } from 'react-native';
  import CityBox from '~components/modules/cityBox';
  
type favorite = {
    city: string
    country: string
    date: string
    icon: string
}
type array = {
    data: Array<favorite>
}


  const FavoriteView = ({data}: array) => {
      return (
        <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            {data.map(item => {
                <CityBox
                  city={item.city}
                  country={item.country}
                  date={item.date}
                  icon={item.icon}
                />
            })}
        </ScrollView>
      </SafeAreaView>
      )
  };

  export default FavoriteView;