// libraries
import React, { useEffect, useContext } from 'react';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_filter-buttons.scss';
import './_neighborhood-filter.scss';

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

export default function NeighborhoodFilter() {
  // context
  const {
    resultData,
    setResultData,
    filteredData,
    setFilteredData,
    activeFilterNeighborhood,
    setActiveFilterNeighborhood,
  } = useContext(Context);

  useEffect(() => {
    if (activeFilterNeighborhood.length < 1) {
      setFilteredData(resultData);
      return;
    }
    const filtered = resultData.filter((event) =>
      event.location.location.neighborhood.some((value) =>
        activeFilterNeighborhood.includes(value)
      )
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
    <div className="checkboxes">
      <div className="checkbox-genre">
        {neighborhoods.map((neighborhood) => (
          <label>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => filterNeighborhood(neighborhood)}
            ></input>
            <div>{neighborhood}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
