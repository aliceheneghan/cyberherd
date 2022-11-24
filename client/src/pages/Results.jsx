// libraries
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Results() {
  const { date } = useParams();

  const getEvents = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/events`);
  };

  useEffect(() => {
    getEvents();
  }, []);

  // console.log(events[0]);

  return (
    <div>
      <h1>Results</h1>
    </div>
  );
}
