import React from 'react';
import { Link } from 'react-router-dom';

// Style
import '../scss/layout/_navbar.scss';

function Navbar() {
  return (
  <div className='navbar'>
 <Link className='get-yourself-a-date' to='/'>Get yourself a date</Link>
 <Link className='magnifier' to='/'>🔎️</Link>
 <Link className='sign-up' to='/'>Sign up</Link>
 <Link className='login' to='/'>Login</Link>
  </div>
  )
}

export default Navbar;