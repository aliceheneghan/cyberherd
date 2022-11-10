import React from 'react';
// Style
import "../scss/layout/_calendar.scss"
// Components
import Cell from './Cell';

export default function Calendar() {
  return (
    <div class="calendar">
        <div class="month-selector">
          <Cell> {"<"} </Cell>
          <Cell>Month</Cell>
          <Cell>{">"}</Cell>
        </div>
    </div>
  )
}
