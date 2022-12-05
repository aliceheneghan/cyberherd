// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// style
import './_event-list.scss';

// components
import Checkbox from './Checkbox.jsx';
import Filter from './Filter.jsx';
import EventCard from './EventCard.jsx';

export default function EventList() {
  const [resultData, setResultData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');


  const { date } = useParams();

  useEffect(() => {
    const getEvent = async (e) => {
      const { data } = await axios.get(
        `http://localhost:4000/api/events/date/${date}`
      );

      setResultData(data.event);
      console.log(data.event[0].name.bandName);
      console.log(data.event[0]);

      setFilteredData(data.event);
    };
    getEvent();
  }, [date]);

  return (
    <div className="event-list-wrapper">
      {/* <Checkbox /> */}
      <Filter
        resultData={resultData}
        setFilteredData={setFilteredData}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div>
        Results
        {filteredData.map((event) => (
          <div>
            <div>{event.name.bandName}</div>
            <div>{event.location}</div>
            <div>{event.genre}</div>
          </div>
        ))}
      </div>

      {/* <div>
        Result Cards
        {resultData.map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
      </div> */}

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
