// libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// style
import './_date-results.scss';

export default function SearchResults() {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/events`).then((response) => {
      setResultData(response.data);
    });
  });

  return (
    <div className="event-list-wrapper">
      <div>
        {resultData.map((event) => (
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
