interface LocationData {
  name: string,
  region: string,
  country: string,
  tz: string,
  localtime: string,
  lat: number,
  lon: number,
  temp: number,
  is_day: boolean,
  condition: number,
  feelslike: number,
  wind_speed: number,
  wind_dir: string,
  wind_degree: number,
  humidity: number
}

export type {
  LocationData
}