import { useEffect, useState } from 'react';

export default function Filter({
  setActiveFilterGenre,
  activeFilterGenre,
  setActiveFilterNeighborhood,
  activeFilterGenreNeighborhood,
  setFilteredData,
  resultData,
}) {

  useEffect(() => {
    console.log(activeFilterGenre)
    if (activeFilterGenre.length < 1) {
      setFilteredData(resultData);
      return;
    } console.log(activeFilterGenre)
    const filtered = resultData.filter((event) =>
      event.genre.some(value => activeFilterGenre.includes(value))
    );
    setFilteredData(filtered);
  }, [activeFilterGenre]);

  const filterGenre = (genre) => {
    if (activeFilterGenre.includes(genre)) {
      let newArrayFilter = activeFilterGenre.filter(arrayGenre => arrayGenre !== genre)
      setActiveFilterGenre(newArrayFilter);
    } else { setActiveFilterGenre(arrayFilter => [...arrayFilter, genre])
    }
  }

  return (
    <div className="buttons">
      {/* <button onClick={() => setActiveFilter('')}>All</button>
      <button onClick={() => setActiveFilter('Electronic')}>Electronic</button>
      <button onClick={() => setActiveFilter('Krautrock')}>Krautrock</button> */}
      <label>
          Hip-Hop
         <input type='checkbox' onChange={(e) => filterGenre('Hip-Hop')}/>
        </label>
        <label>
          Electronic
         <input type='checkbox' onChange={(e) => filterGenre('Electronic')}/>
        </label>
    </div>
  );
}


{/* <label>
Electronic
<input type='checkbox' onChange={(e) => {console.log(e.target.checked); e.target.checked ? filterGenre('Electronic') : filterGenre('Electronic')}}/>
</label> */}
