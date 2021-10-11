import React, { FC } from 'react';
import CityDetailBar from '~components/atoms/CityDetailBar';
import { ICurrent } from '~services/models/Defaults.interface';

interface IProps {
  data: ICurrent
}

const CityDetailBox: FC<IProps> = ({ data }) => {
  return (
    <>
      <CityDetailBar title="Condition" value={data.condition.text} />
      <CityDetailBar title="Last Update:" value={data.last_updated} />
      <CityDetailBar
        title="Temp:"
        value={`${data.temp_c}C / ${data.temp_f}F`}
      />
      <CityDetailBar
        title="Temp Feels:"
        value={`${data.feelslike_c}C / ${data.feelslike_f}F`}
      />
      <CityDetailBar
        title="Wind"
        value={`${data.wind_kph}KM / ${data.wind_kph}MI`}
      />
      <CityDetailBar title="Wind Degree" value={data.wind_degree} />
      <CityDetailBar
        title="Pressure"
        value={`${data.pressure_mb}MB / ${data.pressure_in}IN`}
      />
      <CityDetailBar title="Humidity" value={data.humidity} />
      <CityDetailBar title="Cloud" value={data.cloud} />
      <CityDetailBar title="UV" value={data.uv} />
    </>
  );
};

export default CityDetailBox;
