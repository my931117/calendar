import React, { Component } from 'react';
import styled from "styled-components";

class CalendarHeader extends Component {
  render() {
    const Header = styled.header`
        height: 48px;
        display: flex;
        justify-content: space-between;
        line-height: 48px;
    `;
    const LeftCheck = styled.button`
        color: #333;
        cursor: pointer;
        width: 48px;
        border: 0px;
        margin: 0px;
        padding: 0px;
        font-size: 14px;
        font-weight: 900;
    `
    const RightCheck = LeftCheck.extend`
        transform: rotate(180deg)
    `
    const Year = styled.span`
        color: #333;
        border: 0px;
        margin: 0px;
        padding: 0px;
        font-size: 14px;
        font-weight: 900;
        width: 198px;
        height: 48px;
        display: flex;
        justify-content: center;
    `
    return (
      <Header>
          <LeftCheck onClick={() => this.props.prevMonth()}>ㄑ</LeftCheck>
          <Year>{this.props.month + 1}月 {this.props.year}年</Year>
          <RightCheck onClick={() => this.props.nextMonth()}>ㄑ</RightCheck>
      </Header>
    );
  }
}

export default CalendarHeader;
