// libraries
import React from 'react';

export default function PastEventsDashboard() {
  return (
    <section className="past-events-dashboard">
      <div className="past-events-header-and-events-container">
        <div className="past-events-header">Past Events</div>
        <div className="past-events-container">
          <div className="past-event-card">
            <div className="past-event-thumbnail"></div>
            <div className="past-event-name-of-event">Rolling loud Kush</div>
            <div className="past-event-name-of-band">Juicy J</div>
          </div>
        </div>
      </div>
    </section>
  );
}
