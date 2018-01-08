import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

function getDate(props, day) {
  const { year, month } = props;
  const date = moment(new Date(year, month, day.day));
  if (day.type === 'prev') {
    return date.subtract(1, 'month');
  } else if (day.type === 'next') {
    return date.add(1, 'month');
  }
  return date;
}

const IMPORTANT_CLASSNAMES = {
  高: 'high',
  中: 'normal',
  低: 'low',
};

function getScheduledClassName(props, day) {
  const scheduledItem = (props.arr || []).find(
    item =>
      item.date.format('YYYY-MM-DD') ===
      getDate(props, day).format('YYYY-MM-DD'),
  );

  return scheduledItem
    ? [
        'sinooa-calendar-schedule-day',
        `sinooa-calendar-schedule-day__${IMPORTANT_CLASSNAMES[
          scheduledItem.important
        ]}`,
      ]
    : null;
}

const isHignDay = (props, day, type) => {
  let flag = false;
  const currentDate = new Date();
  switch (type) {
    case 1:
      flag =
        currentDate.getFullYear() === props.year &&
        currentDate.getMonth() === props.month &&
        currentDate.getDate() === day.day;
      break;
    case 2:
      flag = props.selectedDay === day.day && props.dayType == day.type;
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
  const mDays = getMonthDays(props.year, props.month);
  const tds = props.days.map((day, index) => {
    return (
      <td
        className={classNames(
          {
            'sinooa-calendar-current-day': isHignDay(props, day, 1),
            'sinooa-calendar-selected-day': isHignDay(props, day, 2),
          },
          getScheduledClassName(props, day),
        )}
        key={day.day}
        onClick={() => props.onSelected(day.day, day.type)}
      >
        {day.type !== 'current' ? (
          <span style={{ color: '#dedede' }}>{day.day}</span>
        ) : (
          <span>{day.day}</span>
        )}
      </td>
    );
  });
  return <tr className="sinooa-calendar-td">{tds}</tr>;
}
