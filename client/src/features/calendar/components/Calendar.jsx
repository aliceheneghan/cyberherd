// libraries
import { useState } from 'react';

// style
import './_calendar.scss';

// components
import Cell from './Cell';

// data
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Calendar() {
  // state
  const [currentDate, setCurrentDate] = useState(new Date());
  
  return (
    <div className="calendar">
      <div className="calendar-month">
        <Cell>{'<'}</Cell>
        <Cell>Month</Cell>
        <Cell>{'>'}</Cell>
      </div>
      <div className="calendar-days seven-day-grid">
        {daysOfWeek.map((day) => (
          <Cell key={day}>{day}</Cell>
        ))}
      </div>
    </div>
  );
}
