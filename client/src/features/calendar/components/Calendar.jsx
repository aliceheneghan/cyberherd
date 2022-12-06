// libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  sub,
  add,
} from 'date-fns';

// style
import './_calendar.scss';

//icons
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

// components
import Cell from './Cell';

// data
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Calendar({ displayType }) {
  // navigate
  const navigate = useNavigate();

  // state
  const [currentDate, setCurrentDate] = useState(new Date());

  // handlers
  const changeMonth = (cb) => setCurrentDate(cb);
  const navigateToDateResults = (date) => navigate(`/results/${date}`);

  // callbacks
  const prevMonth = () => sub(currentDate, { months: 1 });
  const nextMonth = () => add(currentDate, { months: 1 });

  // date variables (extracted from currentDate)
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd }); // returns an array of objects
  const prefixWeekdays = monthStart.getDay() - 1; // getDay calculates days of week before the start of the month based on Sunday as the first weekday, so -1 needed to align with Monday week start

  return (
    <div className={displayType}>
      <div className="calendar-month">
        <Cell handler={changeMonth} handlerParam={prevMonth}>
          <HiChevronLeft className='arrows arrow-left' />
        </Cell>
        {/* formats JS date into month and year */}
        <Cell>{format(currentDate, 'LLLL yy')}</Cell>
        <Cell handler={changeMonth} handlerParam={nextMonth}>
        <HiChevronRight className='arrows arrow-left' />
        </Cell>
      </div>

    <div className="seven-day-grid calendar-days">
      {daysOfWeek.map((day) => (
        <Cell key={day} className="weekdays">
          {day}
        </Cell>
      ))}

          {Array.from({ length: prefixWeekdays }).map((_, index) => (
            <Cell key={index} className="date-cell"></Cell>
          ))}

          {monthDays.map((date, i) => {
            const formattedDate = `${format(date, 'yyyy')}-${format(
              date,
              'LL'
            )}-${format(date, 'dd')}`;

            return (
              <Cell
                key={i}
                handler={navigateToDateResults}
                handlerParam={formattedDate}
                className="date-cell"
              >
                {/* formats JS date into day */}
                {format(date, 'd')}
              </Cell>
            );
          })}
        </div>
      </div>
  );
}
