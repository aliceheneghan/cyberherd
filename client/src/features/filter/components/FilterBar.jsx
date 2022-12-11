// libraries
import React, { useState } from 'react';

// style
import './_filter-bar.scss';

// icons
import { HiChevronDown } from 'react-icons/hi2';

// components
// (4 filtes)
import GenreFilter from './GenreFilter';

export default function FilterBar() {
  const [showFilter, setShowFilter] = useState(false);

  const handleClick = (event) => {
    setShowFilter((current) => !current);
  };
  return (
    <div className='filter-component'>
    <div className="filter-bar">
      <div className="filter-category">
        Genre
        <div onClick={handleClick}>
          <HiChevronDown className="arrow-down" />
        </div>
      </div>
      <div className="filter-category">
        Neighborhood
        <div>
          <HiChevronDown className="arrow-down" />
        </div>
      </div>
      <div className="filter-category">
        Price
        <div>
          <HiChevronDown className="arrow-down" />
        </div>
      </div>
      <div className="filter-category">
        Venue Type
        <div>
          <HiChevronDown className="arrow-down" />
        </div>
      </div>
    </div>
    <div className='filter-checkboxes'>
        {showFilter && <GenreFilter/>}
    </div>
    </div>   
  );
}
