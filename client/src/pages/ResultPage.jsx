// libraries
import React from 'react';

// components
import { Filter, EventList } from '../features/results'

export default function Results() {
  return (
    <div className="event-page-container">
      <Filter />
      <EventList />
    </div>
  );
}