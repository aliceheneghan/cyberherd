// libraries
import React from 'react';
import { Link } from 'react-router-dom';

// components
import Search from '../../search/components/Search';

// style
import './_navbar.scss';

export default function Navbar() {
  return (
  <div className='navbar'>
  <Link className='get-yourself' to='/'>Get yourself a date</Link>
  <Search />
  <Link className='sign-up' to='/sign-up'>Sign up</Link>
  <Link className='login' to='/login'>Login</Link>
  </div>
  )
}