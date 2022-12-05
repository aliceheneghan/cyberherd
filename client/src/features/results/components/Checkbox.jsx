// create state for each checkbox
// each state should be a boolean
// read the current state and switch to the opposite
// !hopHopFilter

// update dependencies for the useffect to include all the filter states
// bulk of logic to go between lines 31 -33
// return a condition on multiple states
// if hipHopFilter === true -> genre === "Hip-Hop" if (...)

import { useEffect, useState } from 'react';

// useEffect(() => {
//     const filtered = resultData.filter((event) =>
//       if (hipHopFilter === true => {event.genre === 'Hip-Hop'})
//       event.genre.includes(activeFilter)
//     );
//     setFilteredData(filtered);
//   }, [activeFilter]);

// export default function Checkbox(){

// const [hipHopFilter, setHipHopFilter] = useState(false);

//   return (
//       <div className="checkbox">
//        <label>
//           Electronic
//           <input type='checkbox' onChange={() => setHipHopFilter(!hipHopFilter)}/>
//         </label>
//         <label>
//           Krautrock
//           <input type='checkbox' onChange={() => setHipHopFilter(!hipHopFilter)}/>
//         </label>
//         <label>
//           Hip-Hop
//           <input type='checkbox' onChange={() => setHipHopFilter(!hipHopFilter)}/>
//         </label>
//       </div>
//   );
// };

export default function Checkbox({
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

  const [hipHopFilter, setHipHopFilter] = useState(false);

  return (
    <div className="checkbox">
       <label>
          Hip-Hop
         <input type='checkbox' onChange={() => setHipHopFilter(!hipHopFilter)}/>
        </label>
    </div>
  );
}
