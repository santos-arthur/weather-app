'use client'
import NotFound from '@/components/NotFound'
import SearchBox from '@/components/SearchBox'
import WeatherBox from '@/components/WeatherBox'
import WeatherDetails from '@/components/WeatherDetails'
import { LocationData } from './interfaces/LocationData'
import axios from 'axios'
import { useState } from 'react'

const initialLocationData: LocationData = {
  name: '',
  region: '',
  country: '',
  tz: '',
  localtime: '',
  lat: 0,
  lon: 0,
  temp: 0,
  is_day: true,
  condition: 0,
  feelslike: 0,
  wind_speed: 0,
  wind_dir: '',
  wind_degree: 0,
  humidity: 0,
};

const Home: React.FC = () => {
  let [failed, setFailed] = useState(false);
  let [search, setSearch] = useState(false);
  let [locationData, setLocationData] = useState(initialLocationData)
  const handleSearch = (query: string) => {
    const api = axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${query}&aqi=no`).then(response => {
      setSearch(true)
      if(response.status != 200){
        setFailed(true)
        return
      }else{
        setFailed(false)
        let dataFund: LocationData = {
          name: response.data.location.name,
          region: response.data.location.region,
          country: response.data.location.country,
          tz: response.data.location.tz_id,
          localtime: response.data.location.localtime,
          lat: response.data.location.lat,
          lon: response.data.location.lon,
          temp: response.data.current.temp_c,
          is_day: response.data.current.is_day,
          condition: response.data.current.condition.code,
          feelslike: response.data.current.feelslike_c,
          wind_speed: response.data.current.wind_kph,
          wind_dir: response.data.current.wind_dir,
          wind_degree: response.data.current.wind_kph,
          humidity: response.data.current.humidity
        }
        setLocationData(dataFund)
      }
    }).catch(function(error){
      setSearch(true)
      setFailed(true)
    });
  };
  return (
    <div className='relative w-fit max-w-sm h-min-fit bg-sky-50 text-gray-900 rounded-lg p-8 overflow-hidden'>
      <SearchBox search={handleSearch} />
      {search && failed && <NotFound />}
      {search && !failed && <WeatherBox locationData={locationData}/>}
      {search && !failed && <WeatherDetails locationData={locationData} />}
    </div>
  )
}

export default Home;