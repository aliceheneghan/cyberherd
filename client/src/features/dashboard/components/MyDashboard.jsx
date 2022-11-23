// libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// style
import './_my-dashboard.scss';

// http://localhost:4000/image
export default function Dashboard() {
  const [userData, setUserData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getUser = async (e) => {
      const { data } = await axios.get(
        `http://localhost:4000/api/user/${id}`
      );
      console.log(`dashboard testing to see:`);
      console.log(`dashboard data:`, data);
      setUserData(data);
    };
    getUser();
  }, [id]);

  return (
    <div className="my-dashboard">
      My Dashboard
      <img src={userData?.user?.photoURL} alt="" />
    </div>
  );
}