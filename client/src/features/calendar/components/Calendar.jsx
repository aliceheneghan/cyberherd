// libraries
import { useState } from 'react';
import { format } from 'date-fns';

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
        {/* formats JS date into month and year */}
        <Cell>{format(currentDate, 'LLLL yy')}</Cell>
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
