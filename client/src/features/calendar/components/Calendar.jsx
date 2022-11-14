// libraries
import React from 'react';

// style
import "./scss/layout/_calendar.scss"

// components
import Cell from './Cell';

export default function Calendar() {
  return (
    <div className="calendar">
        <div className="calendar-month">
          <Cell> {"<"} </Cell>
          <Cell>Month</Cell>
          <Cell>{">"}</Cell>
        </div>
        <div className="calendar-days seven-day-grid">
          <Cell>Mon</Cell>
          <Cell>Tue</Cell>
          <Cell>Wed</Cell>
          <Cell>Thu</Cell>
          <Cell>Fri</Cell>
          <Cell>Sat</Cell>
          <Cell>Sun</Cell>
        </div>
    </div>
  )
}
