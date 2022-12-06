// libraries
import React from 'react';
import Navbar from '../features/navbar';

// features
import { DefaultNavbar } from '../styled-components/navBar-styled-component';
import EventList from '../features/results/index';
import CalendarBar from '../features/results/components/CalendarBar.jsx'

export default function ResultsPage() {
  return (
    <div className='results-page-container'>
      <CalendarBar />
      <DefaultNavbar>
        <Navbar />
      </DefaultNavbar>
      <EventList />
    </div>
  );
}
