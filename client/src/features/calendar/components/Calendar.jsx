// libraries
import React from 'react';
import { startOfMonth } from 'date-fns'; 

// style
import "./_calendar.scss";

// components
import Cell from './Cell';

// data
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  return (
    <div className="calendar">
        <div className="calendar-month">
          <Cell> {"<"} </Cell>
          <Cell>Month</Cell>
          <Cell>{">"}</Cell>
        </div>
        <div className="calendar-days seven-day-grid">
          {daysOfWeek.map((day) => (
            <Cell key={day}>
              {day}
            </Cell>
          ))}
        </div>
    </div>
  )
}