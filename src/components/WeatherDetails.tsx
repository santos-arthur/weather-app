import { FaWater, FaWind } from "react-icons/fa6";
import { LocationData } from '@/app/interfaces/LocationData'

interface WeatherDetailsProps{
  locationData: LocationData,
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({locationData}) => {
  return(
    <div className='weather-details w-full flex justify-between mt-8'>

      <div className="humidity flex items-center w-1/2 font-thin pl-5 justify-start">
        <FaWater className='text-2xl mr-2.5 mt-1.5' />
        <div className='text'>
          <p className='font-medium text-sm'> Humidity </p>
          <span className='font-medium text-xl'>{locationData.humidity}%</span>
        </div>
      </div>

      <div className="wind flex items-center w-1/2 font-thin pr-5 justify-end">
        <FaWind className='text-2xl mr-2.5 mt-1.5' />
        <div className='text'>
          <p className='font-medium text-sm'> Wind Speed </p>
          <span className='font-medium text-xl'>{locationData.wind_speed} km/h</span>
        </div>
      </div>

    </div>
  ) 
}

export default WeatherDetails;