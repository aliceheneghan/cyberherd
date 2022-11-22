// libraries
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

// components
// import "../features/event-page/index";
import { EventData } from '../features/event-info';


export default function EventPage() {
    const [eventData, setEventData] = useState({});

    const { id } = useParams();
  
    useEffect(() => {
      const getUser = async (e) => {
        const { data } = await axios.get(
          `http://localhost:4000/api/events/${id}`
        );
        console.log(`dashboard testing to see:`);
        console.log(`EventPage data:`, data);
        setEventData(data);
      };
      getUser();
    }, [id]);

  return (
    <div className='event-page-container'>
      <EventData/>
      EventPage
      {/* <img className='event-image' src={eventData?.event?.photoURL} alt="" /> */}

    </div>
  )
}
