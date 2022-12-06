// libraries
import React from 'react';

// features
import EventList from '../features/results/index';
import CalendarBar from '../features/results/components/CalendarBar.jsx'

export default function ResultsPage() {
  return (
    <div className='results-page-container'>
      <CalendarBar />
      <EventList />
    </div>
  );
}