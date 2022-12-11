// libraries
import React, { useEffect, useState } from 'react';

// filter option
const neighborhoods = [
  'Charlottenburg',
  'Friedrichshain',
  'Hellersdorf',
  'Köpenick',
  'Kreuzberg',
  'Lichtenberg',
  'Marzahn',
  'Mitte',
  'Neukölln',
  'Pankow',
  'Prenzlauer Berg',
  'Reinickendorf',
  'Schöneberg',
  'Schöneweide',
  'Spandau',
  'Steglitz',
  'Tempelhof',
  'Treptow',
  'Wedding',
  'Zehlendorf',
];

export default function NeighborhoodFilter({
  setActiveFilterNeighborhood,
  activeFilterNeighborhood,
  setFilteredData,
  resultData,
}) {
  useEffect(() => {
    if (activeFilterNeighborhood.length < 1) {
      setFilteredData(resultData);
      return;
    }
    const filtered = resultData.filter((event) =>
      event.location.location.neighborhood.some((value) => activeFilterNeighborhood.includes(value))
      );
    setFilteredData(filtered);
  }, [activeFilterNeighborhood]);

  const filterNeighborhood = (neighborhood) => {
    if (activeFilterNeighborhood.includes(neighborhood)) {
      let newArrayFilter = activeFilterNeighborhood.filter(
        (arrayNeighborhood) => arrayNeighborhood !== neighborhood
      );
      setActiveFilterNeighborhood(newArrayFilter);
    } else {
      setActiveFilterNeighborhood((arrayFilter) => [
        ...arrayFilter,
        neighborhood,
      ]);
    }
  };

  return (
    <div className="checkbox">
      <div className="checkbox-genre">
        {neighborhoods.map((neighborhood) => (
          <label>
          <button
              className="filter-button"
              onClick={() => filterNeighborhood(neighborhood)}
            >
              {neighborhood}
            </button>
            {/* <input
              type="checkbox"
              onChange={() => filterNeighborhood(neighborhood)}
            ></input>
            {neighborhood} */}
          </label>
        ))}
      </div>
    </div>
  );
}
