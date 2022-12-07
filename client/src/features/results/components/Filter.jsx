import { useEffect, useState } from 'react';

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

export default function Filter({
  setActiveFilterGenre,
  activeFilterGenre,
  setActiveFilterNeighborhood,
  activeFilterGenreNeighborhood,
  setFilteredData,
  resultData,
}) {
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
    <div className="checkbox">
      <div className="checkbox-genre">
        {genres.map((genre) => (
          <label>
            {genre}
            <input type="checkbox" onChange={() => filterGenre(genre)}></input>
          </label>
        ))}
      </div>
    </div>
  );
}
