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
  // context
  const {
    resultData,
    setResultData,
    filteredData,
    setFilteredData,
    activeFilterPrice,
    setActiveFilterPrice,
  } = useContext(Context);

  useEffect(() => {
    if (activeFilterPrice.length < 1) {
      setFilteredData(resultData);
      return;
    }
    const filtered = resultData.filter((event) =>
      event.tickets.doorPrice.some((value) =>
        activeFilterPrice.includes(value)
      )
    );
    setFilteredData(filtered);
  }, [activeFilterPrice]);

  const filterPrice = (price) => {
    if (activeFilterPrice.includes(price)) {
      let newArrayFilter = activeFilterPrice.filter(
        (arrayPrice) => arrayPrice !== price
      );
      setActiveFilterPrice(newArrayFilter);
    } else {
      setActiveFilterPrice((arrayFilter) => [...arrayFilter, price]);
    }
  };

  return (
    <div className="checkboxes">
      <div className="checkbox-genre">
        {priceCategories.map((price) => (
          <label>
            <input
              className="checkbox"
              type="checkbox"
                onChange={() => filterPrice(price)}
            ></input>
            <div>{price}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
