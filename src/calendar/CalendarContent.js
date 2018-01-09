import React from "react";
import styled from "styled-components";
import CalendarRow from './CalendarRow';

const Table = styled.table`
  height:auto;
  border-collapse: collapse;
  height: 234px;
  font-size: 12px;
`;

const Thead = styled.thead`
  height: 20px;
  font-weight: 500;
  line-height: 15px;
  opacity: 0.5;
  text-align: center;
`;

const Tr = styled.tr`
  height:34px;
`;

const Th = styled.td`
  border:1px solid #dedede;
  border: 0px;
  width: 42px;
`;

const Td = styled.td`
  border:1px solid #dedede;
  border: 0px;
  width: 42px;
  min-height: 20px;
`

const Hd = styled.tr`
  height:20px;
`

const Tbody = styled.tbody`
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
          <Hd>
            <Th>日</Th>
            <Th>一</Th>
            <Th>二</Th>
            <Th>三</Th>
            <Th>四</Th>
            <Th>五</Th>
            <Th>六</Th>
          </Hd>
        </Thead>
        <Tbody>{trs}</Tbody>
      </Table>
    </div>
  );
}
