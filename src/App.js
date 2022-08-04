import React from 'react';
import './App.css';
import CityForm from './CityForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: 0,
      long: 0
    }
  }
  getQuery = (value) => {
    this.setState({city: value})
  }
  getLatLong = (object) => {
    this.setState({lat: object})
  }
  render() {
    return (
      <div className="App">
        <CityForm getQuery={this.getQuery} city={this.state.city}/>
      </div>
    );
  }
}
export default App;
