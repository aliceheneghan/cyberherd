// libraries
import React from 'react';
import Navbar from '../features/navbar';

// features
import { DefaultNavbar } from '../styled-components/navBar-styled-component';
import EventList from '../features/results/index';
import Calendar from '../features/calendar';

export default function ResultsPage() {
  return (
    <div className='results-page-container'>
      
      <DefaultNavbar>
        <Navbar />
      </DefaultNavbar>
      <Calendar displayType='calendar-bar' />
      <EventList />
    </div>
  );
}
