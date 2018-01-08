import React from "react";
import styled from "styled-components";
import CalendarRow from './CalendarRow';

const Title = styled.h1`
  color: red;
`;

const Table = styled.table`
  width:100%;
  height:auto;
  border-collapse: collapse;
`;

const Thead = styled.thead`

`;

const Tr = styled.tr`
  height:30px;
`;

const Th = styled.td`
  height:auto;
  border:1px solid #dedede;
  min-width: 30px;
  min-height: 30px;
`;

const Tbody = styled.tbody`
  width:100%;
`;

export default function CalendarContent(props) {
  const { days } = props;
  const trNum = Math.ceil(days.length / 7);
  const trs = [];
  for (let i = 0; i < trNum; i++) {
    trs.push(
      <CalendarRow
        arr={props.arr}
        key={i}
        days={days.slice(i * 7, i * 7 + 7)}
        onSelected={(selectedDay, type) => props.onSelected(selectedDay, type)}
        year={props.year}
        month={props.month}
        selectedDay={props.selectedDay}
        dayType={props.dayType}
      />,
    );
  }
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>日</Th>
            <Th>一</Th>
            <Th>二</Th>
            <Th>三</Th>
            <Th>四</Th>
            <Th>五</Th>
            <Th>六</Th>
          </Tr>
        </Thead>
        <Tbody>{trs}</Tbody>
      </Table>
    </div>
  );
}
