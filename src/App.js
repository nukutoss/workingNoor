import React, { Component } from 'react';

import './App.css';
import StaffTable from './components/staff-table'

import data from './data/staff.json'


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1><StaffTable  data={data} /></h1>
      </div>
      
    );
  }
}


export default App;
