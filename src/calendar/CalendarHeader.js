import React, { Component } from 'react';
import styled from "styled-components";

class CalendarHeader extends Component {
  render() {
    const Header = styled.header`
        color: red;
        height: 40px;
        display: flex;
        background-color: #dedede;
        justify-content: space-between;
        line-height: 40px;
        font-size: 14px;
        padding: 0 20px;
    `;
    const LeftCheck = styled.span`
        color: red;
        cursor: pointer;
        width: 40px;
        display: block;
    `
    const RightCheck = styled.span`
        color: red;
        cursor: pointer;
        width: 40px;
        display: block;
    `
    const Year = styled.span`
        color: blue;
    `
    return (
      <Header>
          <LeftCheck onClick={() => this.props.prevMonth()}>＜</LeftCheck>
          <Year>{this.props.year}年 {this.props.month + 1}月</Year>
          <RightCheck onClick={() => this.props.nextMonth()}>＞</RightCheck>
      </Header>
    );
  }
}

export default CalendarHeader;
