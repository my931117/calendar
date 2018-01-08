import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function CalendarContent() {
  return (
    <div>
      <Title>日历</Title>
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
