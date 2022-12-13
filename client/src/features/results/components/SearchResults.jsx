// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_date-results.scss';

// components
import EventCard from './EventCard.jsx';

export default function SearchResults() {
  const [resultData, setResultData] = useState([]);
  const { search } = useContext(Context);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/events`).then((response) => {
      setResultData(response.data);
    });
  });

  const filteredData = resultData.filter((event) => {
    return search.toLowerCase() === ''
      ? event
      : event.name.bandName.toLowerCase().includes(search) ||
          event.name.eventName.toLowerCase().includes(search) ||
          event.location.toLowerCase().includes(search) ||
          event.genre.toString().toLowerCase().includes(search) ||
          event.information.description.toLowerCase().includes(search);
  });

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
