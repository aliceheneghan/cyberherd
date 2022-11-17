// libraries
import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

// style
import './_calendar.scss';

// components
import Cell from './Cell';

// data
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Calendar() {
  // state
  const [currentDate, setCurrentDate] = useState(new Date());

  // date variables (extracted from currentDate)
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

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

      <div className="seven-day-grid">
        {monthDays.map((date, index) => (
          <Cell key={index} className="date-cell">
            {/* formats JS date into day */}
            {format(date, 'd')}
          </Cell>
        ))}
      </div>
    </div>
  );
}
