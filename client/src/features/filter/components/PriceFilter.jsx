// libraries
import React, { useEffect, useState, useContext } from 'react';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_filter-buttons.scss';
import './_price-filter.scss';

// filter options
const priceCategories = ['< 10', '10 - 20', '20 - 30', '30 >'];

export default function PriceFilter() {
  return (
    <div className="checkboxes">
      <div className="checkbox-filters">
        {priceCategories.map((price) => (
          <label>
            <input
              className="checkbox"
              type="checkbox"
            //   onChange={() => filterVenueType(venue)}
            ></input>
            <div className='price'>{price}</div>
          </label>
        ))}
      </div>
    </div>
  );
}