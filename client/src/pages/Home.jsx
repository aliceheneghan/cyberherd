// libraries
import React from 'react';

// features
import Calendar from '../features/calendar';
import Navbar from '../features/navbar';

// styled-components
import { CalendarNavBar } from '../styled-components/navBar-styled-component';

export default function Home() {
  return (
    <>
      <CalendarNavBar>
        <Navbar />
      </CalendarNavBar>
      <Calendar displayType='calendar-block' sevenDayGrid='seven-day-grid'/>
    </>
  );
}
