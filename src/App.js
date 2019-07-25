import React, { Component } from 'react';
import OrganList from './organization/OrganList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <OrganList />
      </div>
    );
  }
}

export default App;
