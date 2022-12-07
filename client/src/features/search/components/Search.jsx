// libraries
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// context
import { Context } from '../../../context/Context.jsx';

// icons
import { SlMagnifier } from 'react-icons/sl';

// style
import './_search.scss';

export default function Search() {
  const { setSearch } = useContext(Context);

  // navigate

  const navigate = useNavigate();

  const navigateToSearchResults = () => navigate(`/search-results`);

  return (
    <div className="search-bar">
      <form>
        <input
          id="search-input"
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={navigateToSearchResults} className="button-search">
          <SlMagnifier className="search-icon" />
        </button>
      </form>
    </div>
  );
}