import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //my funcs
  onInputChange(e){
    this.setState({
      term:e.target.value
    });
  }


  onFormSubmit(e){
    e.preventDefault();
    //get weather data from api
    this.props.fetchWeatherii(this.state.term);
    this.setState({
      term: '',
    });
  }


  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search cities for a weather forcast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

//Redux functions
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeatherii:fetchWeather}, dispatch);

}

export default connect(null, mapDispatchToProps)(SearchBar);
