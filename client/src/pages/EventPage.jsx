// libraries
import React from 'react';

// features
import { EventData, EventSuggestions } from '../features/event-info';
import Navbar from '../features/navbar';

// styled-components
import { EventPageNavBar } from '../styled-components/navBar-styled-component';

export default function EventPage() {
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