// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// style
import './_event-list.scss';

// components
import EventCard from './EventCard.jsx';

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
    <div className="event-list-wrapper">
      <div>
        Results
        {resultData.map((event) => (
          <div>{event.name.bandName}</div>
        ))}
      </div>

      <div className="event-card-wrapper">
        {/* Test cards until we get map function for events*/}
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
        <EventCard className="event-card"></EventCard>
      </div> 
    </div>
  );
}
