import React from "react";
import styled from "styled-components";

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
  width:100%;
  height:30px;
`;

const Th = styled.th`
  width:14.28%;
  height:auto;
  border:1px solid #dedede;
`;

const Tbody = styled.tbody`

`;

export default class CalendarContent extends React.Component {
  render(){
    return (
      <div>
        <Title>日历</Title>
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
          <Tbody>
            <Tr>
              <Th></Th>
              <Th>1</Th>
              <Th>2</Th>
              <Th>3</Th>
              <Th>4</Th>
              <Th>5</Th>
              <Th>6</Th>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}
