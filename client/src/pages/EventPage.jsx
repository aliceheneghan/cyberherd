// libraries
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EventPage() {
    const [eventData, setEventData] = useState({});

    const { id } = useParams();
  
    useEffect(() => {
      const getUser = async (e) => {
        const { data } = await axios.get(
          `http://localhost:4000/api/event/${id}`
        );
        console.log(`dashboard testing to see:`);
        console.log(`EventPage data:`, data);
        setEventData(data);
      };
      getUser();
    }, []);

  return (
    <div>EventPage
      {/* <img src={eventData?.user?.photoURL} alt="" /> */}

    </div>
  )
}
