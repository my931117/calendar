import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarContent from './calendar/CalendarContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalendarContent />
      </div>
    );
  }
}

export default App;
