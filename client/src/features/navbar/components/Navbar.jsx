import React from 'react';
import { Link } from 'react-router-dom';

// Icons 
import { SlMagnifier } from 'react-icons/sl';

// Style
import './_navbar.scss';

function Navbar() {
  return (
  <div className='navbar'>
  <Link className='get-yourself' to='/get-yourself'>Get yourself a date</Link>
  <Link className='search' to='/search'><SlMagnifier /></Link>
  <Link className='sign-up' to='/sign-up'>Sign up</Link>
  <Link className='login' to='/login'>Login</Link>
  </div>
  )
}

export default Navbar;