// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// context
import { Context } from '../../../context/Context';

export default function EventData() {
  const [eventData, setEventData] = useState({});

  const { userID } = useContext(Context);

  const { eventid } = useParams();

  useEffect(() => {
    const getUser = async (e) => {
      const { data } = await axios.get(`/api/events/${eventid}`);
      console.log(`dashboard testing to see:`);
      console.log(`EventPage data:`, data);
      setEventData(data);
    };
    getUser();
  }, [eventid]);

  const handleSaveDate = async () => {
    try {
      console.log(userID, 'test of userID');
      const response = await axios.patch(
        `/api/events/update
      `,
        { userAttending: userID, id: eventid }
      );
      console.log(response.data);
    } catch (error) {
      console.log('handleSaveData error', error.message);
    }
  };
  // handleSaveDate(eventData?.event?.id)
  console.log(' eventData userID before return', userID);
  return (
    <section className="event-data-container">
      <div className="event-date-price-container">
        <div className="event-date">{eventData?.event?.date}</div>
        <div className="event-price">
          {eventData?.event?.tickets?.preSalePrice} €
        </div>
      </div>
      <div className="event-info-img-container">
        <div className="event-info-container">
          <div className="band-event-name-container">
            <div className="band-name">{eventData?.event?.name?.bandName}</div>
            <div className="event-name">
              {eventData?.event?.name?.eventName}
            </div>
          </div>
          <div className="event-description-container">
            <div className="event-location-time-container">
              <div className="event-location">{eventData?.event?.location}</div>
              <div className="event-time">
                {' '}
                {eventData?.event?.time?.doorsOpen} doors Open
              </div>
            </div>
            <div className="event-description">
              <p>{eventData?.event?.information?.description}</p>
            </div>
            <div className="saveDate-buyTicket-container">
              <button className="save-date-btn" onClick={handleSaveDate}>
                Save the Date
              </button>
              <button className="buy-ticket-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
        <div className="event-img-container">
          <img
            className="event-image"
            src={eventData?.event?.photoURL}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
