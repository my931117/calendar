import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import styled from 'styled-components'

function getDate(props, day) {
  const { year, month } = props;
  const date = moment(new Date(year, month, day.day));
  if (day.type === 'prev') {
    return date.subtract(1, 'month');
  } else if (day.type === 'next') {
    return date.add(1, 'month');
  }
  
  console.log(date)
  return date;
}

const isHignDay = (props, day, type) => {
  let flag = false;
  const currentDate = new Date();
  switch (type) {
    case 1:
      flag =
        currentDate.getFullYear() === props.year &&
        currentDate.getMonth() === props.month &&
        currentDate.getDate() === day.day &&
        day.type === 'current';
      break;
    case 2:
      flag = props.selectedDay === day.day && props.dayType === day.type;
      break;
    default:
      break;
  }
  return flag;
};

/**
   * 获取每个月份的天数
   */
function getMonthDays(year, month) {
  const temp = new Date(year, month + 1, 0);
  return temp.getDate();
}

/**
 * 日历中的一行
 * @param {*} props
 */
export default function CalendarRow(props) {
  const Tr = styled.tr``;
  const Td = styled.td`
    color: ${props => (props.isDay || props.isSelectDay) ? '#fff' : '#333'};
    background-color: ${props => props.isDay ? '#52d58d' : props.isSelectDay ? '#fad383' : '#fff'};
  `;

  const mDays = getMonthDays(props.year, props.month);
  const tds = props.days.map((day, index) => {
  
    return (
      <Td
        isDay = {isHignDay(props, day, 1)}
        isSelectDay = {isHignDay(props, day, 2)} 
        key={day.day}
        onClick={() => props.onSelected(day.day, day.type)}
      >
        {day.type !== 'current' ? (
          <span style={{ color: '#dedede'}}>{day.day}</span>
        ) : (
          <span>{day.day}</span>
        )}
      </Td>
    );
  });
  return <Tr className="sinooa-calendar-td">{tds}</Tr>;
}
