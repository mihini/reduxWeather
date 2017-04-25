import axios from 'axios';

const API_KEY = '71fc5bd4279a47a0f96907ef6ebacc02';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
  const url = `${ROOT_URL}&units=metric&q=${cityName},se`;
  const request = axios.get(url);


  return{
    type: FETCH_WEATHER,
    payload: request,
  }
}
