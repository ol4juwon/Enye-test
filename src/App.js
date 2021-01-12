import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Profiles from './components/Profiles'
class App extends Component{

  render() {
    return (
        <Profiles profiles={this.state.profiles} />
    )
}

state = {
  Profiles: []
}


componentDidMount() {
  fetch('http://api.enye.tech/v1/challenge/records')
  .then(res => res.json())
  .then((data) => {
    this.setState({ Profiles : data })
  })
  .catch(console.log)
}





}


export default App;