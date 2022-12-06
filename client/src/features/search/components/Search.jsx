// libraries
import React, { useState } from 'react';
import axios from 'axios';

// icons
import { SlMagnifier } from 'react-icons/sl';

// style
import './_search.scss';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async (e) => {
    e.preventDefault()
    const res = await axios.get(
      `http://localhost:4000/api/user/search/${searchInput}`
    );
    setData(res.data);
  };

  return (
    <div className="search-bar">
      <form onSubmit={fetchData}>
        <input
          id="search-input"
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="button-search">
          <SlMagnifier className="search-icon" />
        </button>
      </form>
    </div>
  );
}