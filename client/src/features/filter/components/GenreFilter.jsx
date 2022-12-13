// libraries
import React, { useEffect, useContext } from 'react';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_filter-buttons.scss';
import './_genre-filter.scss';

// filter options
const genres = [
  'Acoustic',
  'Afrobeat',
  'Alternative',
  'Electronic',
  'Experimental',
  'Folk',
  'Hardcore',
  'Hip-Hop',
  'Indie',
  'Krautrock',
  'Metal',
  'Rock',
  'Pop',
  'Post-Punk',
  'Psychedelic',
  'Punk',
  'Rap',
  'Shoegaze',
  'Singer Songwriter',
  'Stoner',
  'Trap',
];

export default function GenreFilter() {
  // context
  const {
    resultData,
    setResultData,
    filteredData,
    setFilteredData,
    activeFilterGenre,
    setActiveFilterGenre,
  } = useContext(Context);

  useEffect(() => {
    if (activeFilterGenre.length < 1) {
      setFilteredData(resultData);
      return;
    }
    const filtered = resultData.filter((event) =>
      event.genre.some((value) => activeFilterGenre.includes(value))
    );
    setFilteredData(filtered);
  }, [activeFilterGenre]);

  const filterGenre = (genre) => {
    if (activeFilterGenre.includes(genre)) {
      let newArrayFilter = activeFilterGenre.filter(
        (arrayGenre) => arrayGenre !== genre
      );
      setActiveFilterGenre(newArrayFilter);
    } else {
      setActiveFilterGenre((arrayFilter) => [...arrayFilter, genre]);
    }
  };

  return (
    <div className="checkboxes">
      <div className="checkbox-filters">
        {genres.map((genre) => (
          <label>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => filterGenre(genre)}
            ></input>
            <div className='genre'>{genre}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
