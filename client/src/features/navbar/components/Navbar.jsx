// libraries
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Search from '../../search/components/Search';

// context
import { Context } from '../../../context/LoggedInContext.jsx';

// style
import './_navbar.scss';

export default function Navbar() {
  const { loggedIn, setLoggedIn } = useContext(Context);

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

  return (
    <div className="navbar">
      {loggedIn ? (
        <>
          <Link className="back-to" to="/">
            Back to Calendar
          </Link>
          <Link className="log-out" to="/login" onClick={logOut}>
            Log out
          </Link>
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