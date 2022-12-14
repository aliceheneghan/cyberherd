// libraries
import React from 'react';

// features
import Navbar from '../features/navbar';
import { ResultPageNavBar } from '../styled-components/navBar-styled-component';
import DateResults from '../features/results/index';
import Calendar from '../features/calendar';
import FilterBar from '../features/filter';

export default function ResultsPage() {
  return (
    <div className='results-page-container'>
      <ResultPageNavBar>
        <Navbar />
      </ResultPageNavBar>
      <Calendar displayType='calendar-bar' />
      <FilterBar />
      <DateResults />
    </div>
  );
}