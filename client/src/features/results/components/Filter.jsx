import { useEffect, useState } from 'react';

export default function Filter({
  setActiveFilter,
  activeFilter,
  setFilteredData,
  resultData,
}) {
  useEffect(() => {
    if (activeFilter === '') {
      setFilteredData(resultData);
      return;
    }
    const filtered = resultData.filter((event) =>
      event.genre.includes(activeFilter)
    );
    setFilteredData(filtered);
  }, [activeFilter]);

  return (
    <div className="buttons">
      <button onClick={() => setActiveFilter('')}>All</button>
      <button onClick={() => setActiveFilter('Electronic')}>Electronic</button>
      <button onClick={() => setActiveFilter('Krautrock')}>Krautrock</button>
      <label>
          Hip-Hop
         <input type='checkbox' onChange={() => setActiveFilter('Hip-Hop')}/>
        </label>
    </div>
  );
}
