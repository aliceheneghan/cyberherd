// libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function VenuePage() {
  const [venueData, setVenueData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getUser = async (e) => {
      const { data } = await axios.get(
        `http://localhost:4000/api/venues/${id}`
      );
      console.log(`dashboard testing to see:`);
      console.log(`VenuePage data:`, data);
      setVenueData(data);
    };
    getUser();
  }, [id]);

  return (
    <div>
      VenuePage
      <img src={venueData?.venue?.photoURL} alt="" />
    </div>
  );
}
