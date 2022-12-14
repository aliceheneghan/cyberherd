// libraries
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

export default function Calendar({ displayType, sevenDayGrid }) {
  // initial data
  const { date } = useParams(); // Pulls date selected from calendar passed in url param
  let daysOfWeek = [];
  let prefixWeekdays = 0;
  let highlightDateClicked = '';

  // navigate
  const navigate = useNavigate();

  // state
  const [dateSelected, setDateSelected] = useState(new Date()); // initial value is today's date

  // handlers
  const changeMonth = (cb) => setDateSelected(cb);
  const navigateToDateResults = (date) => navigate(`/results/${date}`);

  // callbacks
  const prevMonth = () => sub(dateSelected, { months: 1 });
  const nextMonth = () => add(dateSelected, { months: 1 });

  // date variables (extracted from dateSelected)
  const monthStart = startOfMonth(dateSelected);
  const monthEnd = endOfMonth(dateSelected);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd }); // returns an array of objects
  if (displayType === 'calendar-block') {
    daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    prefixWeekdays = monthStart.getDay() - 1; // getDay calculates days of week before the start of the month based on Sunday as the first weekday, so -1 needed to align with Monday week start
  }

  return (
    <div className={displayType}>
      <div className="calendar-month">
        <Cell handler={changeMonth} handlerParam={prevMonth}>
          <HiChevronLeft className="arrows arrow-left" />
        </Cell>
        {/* formats JS date into month and year */}
        <Cell>{format(dateSelected, 'LLLL yy')}</Cell>
        <Cell handler={changeMonth} handlerParam={nextMonth}>
          <HiChevronRight className="arrows arrow-left" />
        </Cell>
      </div>

      <div className={`${sevenDayGrid} calendar-days`}>
        {/* Days of week and prefixWeekdays only included if sevenDayGrid class passed to Calendar component */}
        {daysOfWeek.map((day) => (
          <Cell key={day} className="weekdays">
            {day}
          </Cell>
        ))}

        {Array.from({ length: prefixWeekdays }).map((_, index) => (
          <Cell key={index} className="date-cell"></Cell>
        ))}

        {monthDays.map((monthDay, i) => {
          const formattedDate = `${format(monthDay, 'yyyy')}-${format(
            monthDay,
            'LL'
          )}-${format(monthDay, 'dd')}`;

          // sets or empties highlightDateClicked className
          if (formattedDate === date) {
            highlightDateClicked = 'highlight-date-clicked';
          } else {
            highlightDateClicked = '';
          }

          return (
            <Cell
              key={i}
              handler={navigateToDateResults}
              handlerParam={formattedDate}
              className={`date-cell ${highlightDateClicked}`}
            >
              {/* formats JS date into day */}
              {format(monthDay, 'd')}
            </Cell>
          );
        })}
      </div>
    </div>
  );
}