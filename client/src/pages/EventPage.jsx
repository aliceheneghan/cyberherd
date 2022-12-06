// libraries
import React from 'react';

// features
import { EventData, EventSuggestions } from '../features/event-info';
import Navbar from '../features/navbar';

// styled-components
import { EventPageNavBar } from '../styled-components/navBar-styled-component';

export default function EventPage() {
  // try link below
  //http://localhost:3000/eventpage/637cb59282b0c6610a755792

  return (
    <>
      <EventPageNavBar>
        <Navbar />
      </EventPageNavBar>
      <div className="event-page-container">
        <EventData />
        <EventSuggestions />
      </div>
    </>
  );
}
