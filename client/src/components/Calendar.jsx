import React from 'react';
// Style
import "../scss/layout/_calendar.scss"
// Components
import Cell from './Cell';

export default function Calendar() {
  return (
    <div className="Calendar">
        <div className="CalendarMonth">
          <Cell> {"<"} </Cell>
          <Cell>Month</Cell>
          <Cell>{">"}</Cell>
        </div>
        <div className="CalendarDays SevenDayGrid">
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
