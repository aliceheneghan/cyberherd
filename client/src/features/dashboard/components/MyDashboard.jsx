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
  // const [userData, setUserData] = useState({});

  const { setUserID, userID, setUserData, userData } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    console.log('clg in MYDashboard useEffect', id);
    const getUser = async (e) => {
      const { data } = await axios.get(`/api/user/${id}`);
      console.log('this is userID:', userID);
      console.log(`dashboard testing to see:`);
      console.log(`dashboard data:`, data);

      console.log('users_ID', data?.user?._id);

      setUserData(data);
    };
    getUser();

  }, [id]);
  console.log('Dashboard + userID', userID);
  return (
    <section className='my-dashboard'>
      My Dashboard
      {/* <img
        className="upload-profile-photo"
        src={userData?.user?.photoURL}
        alt=""
      /> */}
      <div>Saved Events</div>
      <div>Map</div>
      <div>Past Events</div>
      {/* <div>Upload Events</div>
      <div>My Artists</div>
      <div>My Venues</div> */}
    </section>
  );
}
