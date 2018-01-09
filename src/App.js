import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarHeader from './calendar/CalendarHeader';
import CalendarContent from './calendar/CalendarContent';
import styled from 'styled-components'

class App extends Component {
  constructor(){
    super();
    const now = new Date();
    this.state = {
      year: now.getFullYear(),
      month: now.getMonth(),
      selectedDay: now.getDate(),
      dayType: 'current',
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

  getMonthDays(month) {
    const temp = new Date(this.state.year, month + 1, 0);
    return temp.getDate();
  }

  getFirstDayWeek() {
    const dt = new Date(`${this.state.year}/${this.state.month + 1}/1`);
    const Weekdays = dt.getDay();
    return Weekdays;
  }

  getLastDayWeek(lastDay) {
    const dt = new Date(
      `${this.state.year}/${this.state.month + 1}/${lastDay}`,
    );
    const Weekdays = dt.getDay();
    return Weekdays;
  }

  getDays() {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const getDayItems = this.getMonthDays(this.state.month);
    const firstDayWeek = this.getFirstDayWeek();
    const preMonthLastDay = this.getMonthDays(this.state.month - 1);
    const lastDayWeek = this.getLastDayWeek(getDayItems);
    for (let i = 0; i < getDayItems; i++) {
      arr2[i] = {
        type: 'current',
        day: i + 1,
      };
    }

    for (let i = 0; i < firstDayWeek; i++) {
      arr1[i] = {
        type: 'prev',
        day: preMonthLastDay - i,
      };
    }

    if (lastDayWeek !== 6) {
      for (let i = 0; i < 6 - lastDayWeek; i++) {
        arr3[i] = {
          type: 'next',
          day: i + 1,
        };
      }
    }

    const days = arr1
    .reverse()
    .concat(arr2)
    .concat(arr3);

    const beginNextDay = 6 - lastDayWeek;
    const weeks = days.length / 7;
    const max = 42;
    if (weeks < 6) {
      for (let i = 0; i < max - weeks * 7; i++) {
        days.push({
          type: 'next',
          day: beginNextDay + i + 1,
        });
      }
    }

    return days;
  }

  handleDaySelected(selectedDay, dayType) {
    if (dayType === 'prev') {
      const month = this.state.month === 0 ? 11 : this.state.month - 1;
      const year =
        this.state.month === 0 ? this.state.year - 1 : this.state.year;
      this.setState({
        year,
        month,
        selectedDay,
      });

    } else if (dayType === 'next') {
      const month = this.state.month === 11 ? 0 : this.state.month + 1;
      const year =
        this.state.month === 11 ? this.state.year + 1 : this.state.year;
      this.setState({
        year,
        month,
        selectedDay,
      });

    }

    this.setState({
      selectedDay,
    });
  }

  

  render() {
    const Calendar = styled.div`
    background:#fff;
    font-size: 12px;
    font-weight: 400;
    padding: 0px 8px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 300px;
    height: 282px;
    `
    return (
      <Calendar>
        <CalendarHeader 
          year={this.state.year}  
          month={this.state.month}
          prevMonth={() => this.prevMonth()}
          nextMonth={() => this.nextMonth()}
        />
        <CalendarContent
          days={this.getDays()}
          month={this.state.month}
          year={this.state.year}
          selectedDay={this.state.selectedDay}
          dayType={this.state.dayType}
          onSelected={(value, type) => this.handleDaySelected(value, type)}
        />
      </Calendar>
    );
  }
}

export default App;
