import React from 'react';

export default function EventData() {
  return (
    <section className="event-data-container">
      <div className="event-date-price-container">
        <div className="event-date">01.12.2022</div>
        <div className="event-price">15.99 €</div>
      </div>
      <div className="event-info-img-container">
        <div className="event-info-container">
          <div className="event-name"> Yoko Suna strikes back - unapologetically</div>
          <div className="event-description-container">
            <div className="event-location-time-container">
              <div className="event-location">Location</div>
              <div className="event-time">19:30 Entering</div>
            </div>
            <div className="event-description">
              <p>Yoko Suna is an outstanding lorem ipsum dolor sit amet consectetur adipisicing elit. Bass iure mollitia reiciendis culpa. Possimus porro ab Berlin, totam aut dicta placeat commodi, tenetur voluptates laboriosam quae adipisci nulla unde voluptas? Kreuzberg ipsum dolor sit amet.</p>
            </div>
            <div className="saveDate-buyTicket-container">
              <button className="save-date-btn">Save the Date</button>
              <button className="buy-ticket-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
        <div className="event-img-container"></div>
      </div>
    </section>
  );
}
