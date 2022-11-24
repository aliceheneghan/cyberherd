// libraries
import React from 'react';

// components
import { EventData, EventSuggestions } from '../features/event-info';

export default function EventPage() {
  // try link below
  //http://localhost:3000/eventpage/637cb59282b0c6610a755792

  return (
    <div className="event-page-container">
      <EventData />
      <EventSuggestions />
    </div>
  );
}
