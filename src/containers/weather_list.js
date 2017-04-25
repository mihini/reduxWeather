import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    console.log(cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const hum = cityData.list.map(weather => weather.main.humidity);
    // const lat = cityData.city.coord.lat;
    // const lon = cityData.city.coord.lon;
    //same as the above 2 line. ES6
    const {lon, lat} = cityData.city.coord;


    console.log(temps);
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange" units="&#x2103;"/></td>
        <td><Chart data={pressure} color="red" units="hPA"/></td>
        <td><Chart data={hum} color="green" units="%"/></td>

      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (&#x2103;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>
    );
  }
}

// function mapStateToProps(state){
//   return{weather: state.weather}; // using state.weather here because we used weather in reducers/index.js
// }
//Refactoring ES 6
// function mapStateToProps({weather}){
//   return{weather:weather};
// }
//Refactoring same as above 2 functions
function mapStateToProps({weather}){
  return{weather};
}

export default connect(mapStateToProps)(WeatherList);
