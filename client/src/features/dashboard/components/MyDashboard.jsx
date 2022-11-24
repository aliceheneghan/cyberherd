// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// context
import { Context } from '../../../context/LoggedInContext';

// style
import './_my-dashboard.scss';

// http://localhost:4000/image
export default function Dashboard() {
  const [userData, setUserData] = useState({});

  const {setUserID, userID } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async (e) => {
      const { data } = await axios.get(`http://localhost:4000/api/user/${id}`);
      console.log(`dashboard testing to see:`);
      console.log(`dashboard data:`, data);
      console.log("usersID", data?.user?._id)
      setUserData(data);
    //   setUserID(data?.user?._id)
    // console.log("userID-statee", userID)

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
