import React from 'react';
// Style
import "../scss/layout/_calendar.scss"
// Components
import Cell from './Cell';

export default function Calendar() {
  return (
    <div class="calendar">
        <div class="month-selector">
          <Cell className="span-2"> {"<"} </Cell>
          <Cell className="span-3">Month</Cell>
          <Cell className="span-2">{">"}</Cell>
        </div>
    </div>
  )
}
