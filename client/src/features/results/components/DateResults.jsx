// libraries
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_date-results.scss';

// components
import EventCard from './EventCard.jsx';

export default function EventList() {
  // url parameter
  const { date } = useParams();

  // context
  const {
    resultData,
    setResultData,
    filteredData,
    setFilteredData,
  } = useContext(Context);

  useEffect(() => {
    const getEvent = async (e) => {
      const { data } = await axios.get(
        `http://localhost:4000/api/events/date/${date}`
      );
      setResultData(data.event);
      setFilteredData(data.event);
    };
    getEvent();
  }, [date]);

  return (
    <div className="event-list-wrapper">
      <div>
        <div className="event-card-wrapper">
          {filteredData.map((event, i) => {
            console.log(event);
            return (
              <EventCard key={i} className="event-card">
                {event}
              </EventCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}