// libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// style
import './_date-results.scss';

export default function SearchResults() {
  const [resultData, setResultData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/events`).then((response) => {
      setResultData(response.data);
    });
  });

  return (
    <div className="event-list-wrapper">
      <div className="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
      </div>
      <div>
        {resultData
          .filter((event) => {
            return search.toLowerCase() === ''
              ? event
              : event.name.bandName.toLowerCase().includes(search) ||
                  event.name.eventName.toLowerCase().includes(search) ||
                  event.location.toLowerCase().includes(search) ||
                  event.genre.toString().toLowerCase().includes(search) ||
                  event.information.description.toLowerCase().includes(search);
          })
          .map((event) => (
            <div>
              <div>{event.name.bandName}</div>
              <div>{event.location}</div>
              <div>{event.genre}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
