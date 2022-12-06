// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SearchResults() {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/events`).then((response) => {
      setResultData(response.data);
    });
  });

  return (
    <div>
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
