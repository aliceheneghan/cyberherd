// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_date-results.scss';

export default function SearchResults() {
  const [resultData, setResultData] = useState([]);
  const { search } = useContext(Context);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/events`).then((response) => {
      setResultData(response.data);
    });
  });

  return (
    <div className="event-list-wrapper">
      <div>
        {resultData
          .filter((event) => {
            return search.toLowerCase() === ''
              ? event
              : event.name.bandName.toLowerCase().includes(search) ||
                  event.name.eventName.toLowerCase().includes(search) ||
                  event.location.name.toLowerCase().includes(search) ||
                  event.genre.toString().toLowerCase().includes(search) ||
                  event.information.description.toLowerCase().includes(search);
          })
          .map((event) => (
            <div>
              <div>{event.name.bandName}</div>
              <div>{event.location.name}</div>
              <div>{event.genre}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
