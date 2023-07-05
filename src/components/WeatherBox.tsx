import { LocationData } from '@/app/interfaces/LocationData'
import Image from 'next/image'
import { exit } from 'process';

interface WeatherBoxProps{
  locationData: LocationData,
}

const WeatherBox: React.FC<WeatherBoxProps> = ({locationData}) => {
  let weatherIcons = require('@/app/config/weatherIcons.json');
  let icon = '';
  let description = 'Not Identified!';
  weatherIcons.forEach((weatherIcon: {
    code: number; day: string;  night: string; icon: string; 
}) => {
    if(weatherIcon.code == locationData.condition){
      icon = weatherIcon.icon
      if(locationData.is_day){
       icon = 'day/' + weatherIcon.icon;
       description = weatherIcon.day
      }else{
       icon = 'night/' + weatherIcon.icon;
       description = weatherIcon.night
      }
    }
  });
  
  return(
    <div className='weather-box text-center mt-8'>
      <Image
        src={`/images/weather/${icon}`}
        alt={description}
        width='300'
        height='300'
      />
      <p className='temperature relative text-2xl font-medium mt-2'>{description}</p>
      <p className='temperature relative text-7xl font-semibold mt-8'>{locationData.temp}°C</p>
      <p className='description mt-4 text-2xl font-medium'>{locationData.name}, {locationData.region} - {locationData.country}</p>
    </div>
  ) 
}

export default WeatherBox;