import React from 'react';
// Style
import "../scss/layout/_calendar.scss"
// Components
import Cell from '../features/calendar/components/Cell';

export default function Calendar() {
  return (
    <div className="Calendar">
        <div class="CalendarMonth">
          <Cell className=""> {"<"} </Cell>
          <Cell className="">Month</Cell>
          <Cell className="">{">"}</Cell>
        </div>
        <div class="CalendarDays SevenDayGrid">
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
