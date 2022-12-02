// libraries
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// features
import Search from '../../search/components/Search';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_navbar.scss';

export default function Navbar() {
  const { loggedIn, setLoggedIn, userData, setUserData } = useContext(Context);

  const navigate = useNavigate();

  // const { id } = useParams();

  // useEffect(() => {
  //   const getUser = async (e) => {
  //     const { data } = await axios.get(`http://localhost:4000/api/user/${id}`);
  //     console.log(`dashboard testing to see:`);
  //     console.log(`dashboard data:`, data);
  //     console.log("usersID", data?.user?._id)
  //     setUserData(data);
  //   };
  //   getUser();
  // }, [id]);

  // handle logout event
  const logOut = (e) => {
    e.preventDefault();
    console.log(logOut);

    // clear data from storage
    localStorage.clear();
    sessionStorage.clear();

    setLoggedIn(false);
    navigate('/login');
  };
  console.log('userData in navBarComponent', userData);
  return (
    <div className="navbar">
      {loggedIn ? (
        <>
          <Link className="back-to" to="/">
            Back to Calendar
          </Link>
          <Search />
          <div className='profile-photo-and-logout-container'>
            <div className="upload-profile-photo-containers-hover-container">
            <div className="upload-profile-photo-container">
              <img
                className="upload-profile-photo"
                src={userData?.user?.photoURL}
                alt=""
              />
            </div>
            </div>
            <Link className="log-out" to="/login" onClick={logOut}>
              Log out
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link className="get-yourself" to="/">
            Get yourself a date
          </Link>
          <Search />
          <Link className="sign-up" to="/sign-up">
            Sign up
          </Link>
          <Link className="login" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}
