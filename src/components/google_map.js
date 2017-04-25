import React, {Component} from 'react';

class GoogleMap extends Component {

//componentDidMount calls automatictlly after the component is done rendered to the screen.
  componentDidMount(){ //
    new google.maps.Map(this.refs.map, {//this.refs.map where we want the new google map to be rendered to.
        zoom:12,
        center:{
          lat: this.props.lat, // lng from google maps, this.props.lat api from openweather
          lng:this.props.lon//this.props.lon data from openweather
        }
    })
  }

  render(){
    //this.refs.map when i write this in this comp. it will give me the div that im referering too.

    return (
      <div ref="map">

      </div>
    );
  }

}

export default GoogleMap;
