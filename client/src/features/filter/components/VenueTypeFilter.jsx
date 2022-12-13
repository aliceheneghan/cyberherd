// libraries
import React, { useEffect, useContext } from 'react';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_filter-buttons.scss';
import './_venue-filter.scss';

// filter options
const venueTypes = ['Bar', 'Café', 'Club', 'Concert Hall', 'Cultural Center'];

export default function VenueTypeFilter() {
  // context
  const {
    resultData,
    setResultData,
    filteredData,
    setFilteredData,
    activeFilterVenueType,
    setActiveFilterVenueType,
  } = useContext(Context);

  useEffect(() => {
    if (activeFilterVenueType.length < 1) {
      setFilteredData(resultData);
      return;
    }
    const filtered = resultData.filter((event) =>
      event.location.venueType.some((value) =>
        activeFilterVenueType.includes(value)
      )
    );
    setFilteredData(filtered);
  }, [activeFilterVenueType]);

  const filterVenueType = (venue) => {
    if (activeFilterVenueType.includes(venue)) {
      let newArrayFilter = activeFilterVenueType.filter(
        (arrayVenue) => arrayVenue !== venue
      );
      setActiveFilterVenueType(newArrayFilter);
    } else {
      setActiveFilterVenueType((arrayFilter) => [...arrayFilter, venue]);
    }
  };

  return (
    <div className="checkboxes">
      <div className="checkbox-genre">
        {venueTypes.map((venue) => (
          <label>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => filterVenueType(venue)}
            ></input>
            <div>{venue}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
