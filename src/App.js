import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarHeader from './calendar/CalendarHeader';

class App extends Component {
  constructor(){
    super();
    const now = new Date();
    this.state = {
      year: now.getFullYear(),
      month: now.getMonth(),
    }
  }

  /**
   * 切换到上一个月
   */
  prevMonth(){
    const month = this.state.month === 0 ? 11 : this.state.month - 1;
    const year = this.state.month === 0 ? this.state.year - 1 : this.state.year;

    this.setState({
      year,
      month,
    })
  }

   /**
   * 切换到下一个月
   */
  nextMonth(){
    const month = this.state.month === 11 ? 0 : this.state.month + 1;
    const year = this.state.month === 11 ? this.state.year + 1 : this.state.year;

    this.setState({
      year,
      month,
    })
  }

  



  render() {
    return (
      <div className="App">
        <CalendarHeader 
          year={this.state.year}  
          month={this.state.month}
          prevMonth={() => this.prevMonth()}
          nextMonth={() => this.nextMonth()}
        />
      </div>
    );
  }
}

export default App;
