// libraries
import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, sub, add } from 'date-fns';

// style
import './_calendar.scss';

// components
import Cell from './Cell';

// data
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Calendar() {
  // state
  const [currentDate, setCurrentDate] = useState(new Date());

  // handlers
  const onClick = (cb) => setCurrentDate(cb);

  // callbacks
  const prevMonth = () => sub(currentDate, { months: 1 });
  const nextMonth = () => add(currentDate, { months: 1 });

  // date variables (extracted from currentDate)
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const prefixWeekdays = monthStart.getDay() - 1; // getDay calculates days of week before the start of the month based on Sunday as the first weekday, so -1 needed to align with Monday week start

  return (
    <div className="calendar-wrapper">
      <div className="calendar">
      <div className="calendar-month">
        <Cell handler={onClick} cb={prevMonth}>
          {'<'}
        </Cell>
        {/* formats JS date into month and year */}
        <Cell>{format(currentDate, 'LLLL yy')}</Cell>
        <Cell handler={onClick} cb={nextMonth}>
          {'>'}
        </Cell>
      </div>

      <div className='seven-day-grid calendar-days'>
        {daysOfWeek.map((day) => (
          <Cell key={day} className="weekdays">{day}</Cell>
        ))}
      
        {Array.from({ length: prefixWeekdays }).map((_, index) => (
          <Cell key={index} className="date-cell"></Cell>
        ))}

        {monthDays.map((date, index) => (
          <Cell key={index} className="date-cell">
            {/* formats JS date into day */}
            {format(date, 'd')}
          </Cell>
        ))}
      </div>
    </div>
    </div>
  );
}
