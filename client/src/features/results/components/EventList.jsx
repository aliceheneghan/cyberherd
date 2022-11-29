// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EventList() {
  const [resultData, setResultData] = useState([]);

  const { date } = useParams();

  useEffect(() => {
    const getEvent = async (e) => {
      const { data } = await axios.get(
        `http://localhost:4000/api/events/date/${date}`
      );

      setResultData(data.event);
      console.log(data.event[0].name.bandName);
      console.log(data.event[0]);
    };
    getEvent();
  }, [date]);

  return (
    <div>
      <div>
        Results
        {resultData.map((event) => (
          <div>{event.name.bandName}</div>
        ))}
      </div>

      <div className="results-wrapper">
      <div className="event-card"></div>
        <div className="event-card"></div>
        <div className="event-card"></div>
        <div className="event-card"></div>
        <div className="event-card"></div>
        <div className="event-card"></div>
        <div className="event-card"></div>
      </div>
    </div>
  );
}
