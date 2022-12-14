// libraries
import React, { useState } from 'react';

// style
import './_filter-bar.scss';

// icons
import { HiChevronDown } from 'react-icons/hi2';

// components
import GenreFilter from './GenreFilter';
import NeighborhoodFilter from './NeighborhoodFilter';
import PriceFilter from './PriceFilter';
import VenueTypeFilter from './VenueTypeFilter';

export default function FilterBar() {
  const [showGenreFilter, setShowGenreFilter] = useState(false);
  const [showNeighborhoodFilter, setShowNeighborhoodFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showVenueTypeFilter, setShowVenueTypeFilter] = useState(false);

  //   handlers
  const handleGenreFilter = (event) => {
    setShowGenreFilter((current) => !current);
  };

  const handleNeighborhoodFilter = (event) => {
    setShowNeighborhoodFilter((current) => !current);
  };

  const handlePriceFilter = (event) => {
    setShowPriceFilter((current) => !current);
  };

  const handleVenueTypeFilter = (event) => {
    setShowVenueTypeFilter((current) => !current);
  };

  return (
    <div className="filter-component">
      <div className="filter-bar">
        <div className="filter-category">
          Genre
          <div onClick={handleGenreFilter}>
            <HiChevronDown className="arrow-down" />
          </div>
        </div>
        <div className="filter-category">
          Neighborhood
          <div onClick={handleNeighborhoodFilter}>
            <HiChevronDown className="arrow-down" />
          </div>
        </div>
        <div className="filter-category">
          Price
          <div onClick={handlePriceFilter}>
            <HiChevronDown className="arrow-down" />
          </div>
        </div>
        <div className="filter-category">
          Venue Type
          <div onClick={handleVenueTypeFilter}>
            <HiChevronDown className="arrow-down" />
          </div>
        </div>
      </div>

      <div className="filter-checkboxes">
        {showGenreFilter && <GenreFilter />}
        {showNeighborhoodFilter && <NeighborhoodFilter />}
        {showPriceFilter && <PriceFilter />}
        {showVenueTypeFilter && <VenueTypeFilter />}
      </div>
    </div>
  );
}