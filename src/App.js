import React from 'react';
import './App.css';
import CityForm from './CityForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  storeCity = (value) => {
    this.setState({"city": value})
  }
  render() {
    return (
      <div className="App">
        <CityForm storeCity={this.storeCity} city={this.state.city}/>
      </div>
    );
  }
}
export default App;
