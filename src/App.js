import React from 'react';
import './App.css';
import CityForm from './CityForm';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      citySearch: '',
      cityLocation: {}
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({cityLocation: response.data[0]});

  }
  searchApi = (value) => {
    this.setState({citySearch: value});
  }
  // getLatLong = (object) => {
  //   this.setState({lat: object})
  // }
  render() {
    console.log(this.state.citySearch);
    return (
      <div className="App">
        <CityForm searchApi={this.searchApi} handleSubmit={this.getLocation}/>
      </div>
    );
  }
}
export default App;
