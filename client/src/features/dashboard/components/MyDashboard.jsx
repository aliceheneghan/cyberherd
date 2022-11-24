// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_my-dashboard.scss';

// http://localhost:4000/image
export default function Dashboard() {
  const { userData, setUserData } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async (e) => {
      const { data } = await axios.get(`http://localhost:4000/api/user/${id}`);
      console.log(`dashboard testing to see:`);
      console.log(`dashboard data:`, data);
      setUserData(data);
      
    };
    getUser();
  }, [id]);
  
  return (
    <section className="my-dashboard">
      My Dashboard
      {/* <img src={userData?.user?.photoURL} alt="" /> */}
      <div>Saved Events</div>
      <div>Map</div>
      <div>Past Events</div>
      <div>Upload Events</div>
      <div>My Artists</div>
      <div>My Venues</div>
    </section>
  );
}
