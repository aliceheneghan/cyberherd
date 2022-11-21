// libraries
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// components
import Search from '../../search/components/Search';

// style
import './_navbar.scss';


export default function Navbar() {
  const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);


  return (
  <div className='navbar'>
  <Link className='get-yourself' to='/'>Get yourself a date</Link>
  <Search />
  <Link className='sign-up' to='/sign-up'>Sign up</Link>
  <Link className='login' to='/login'>Login</Link>
  </div>
  )
}