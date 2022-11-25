// libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EventList() {
  const [resultData, setResultData] = useState({});

  const { date } = useParams();

  useEffect(() => {
    const getEvent = async (e) => {
      const { data } = await axios.get(
        `http://localhost:4000/api/events/date/${date}`
      );
      console.log(date)
      setResultData(data);
    };
    getEvent();
  }, [date]);

  return <div>Results{resultData?.event?.date}</div>;
  
}
