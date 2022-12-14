// libraries
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';



// features
import Search from '../../search/components/Search';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_navbar.scss';
import CreateEvent from '../../event-form/components/CreateEvent';


// icons
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
export default function Navbar() {
  const { loggedIn, setLoggedIn, userData, userID } = useContext(Context);

  const navigate = useNavigate();

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
  const imageNotAvailable = userData?.user?.photoURL.slice(-9) === 'undefined';
  console.log('imageNotAvailable', imageNotAvailable);
  return (
    <div className="navbar">
      {loggedIn ? (
        <>
        <div className="back-to-calendar-and-create-event">
          <Link className="back-to" to="/">
            Back to Calendar
          </Link>
          
          <Link className="create-an-event" to="/create-event">Create an Event</Link>
          </div>
          <Search />
          <div className="profile-photo-and-logout-container">
            <Link className="profile-img-link" to={`/dashboard/${userID}`}>
              <div
                className={
                  imageNotAvailable
                    ? 'display-none'
                    : 'upload-profile-photo-containers-hover-container'
                }
              >
                <div className="upload-profile-photo-container">
                  <img
                    className="upload-profile-photo"
                    src={userData?.user?.photoURL}
                    alt=""
                  />
                </div>
              </div>
            </Link>

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
          {/* <Link className="create-an-event" to="/create-event">Create an event</Link> */}
          <Search />
          <div className="sign-up-login-container">
            <Link className="sign-up" to="/sign-up">
              Sign up
            </Link>
            <Link className="login" to="/login">
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
