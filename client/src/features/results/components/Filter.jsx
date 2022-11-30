import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// filter variables

const genre = [
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
const price = [];
const neighborhood = [
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
const venueType = ['bar', 'café', 'club', 'concert hall', 'cultural center'];

export default function Filter() {
    const [resultData, setResultData] = useState([]);

    const { date } = useParams();
  
    useEffect(() => {
      const getEvent = async (e) => {
        const { data } = await axios.get(
          `http://localhost:4000/api/events/date/${date}`
        );
  
        setResultData(data.event);
        console.log(data.event[0].name.bandName);
        console.log(data.event[0]);
      };
      getEvent();
    }, [date]);
  
    return (
      <div>
      Filtered Results
        {resultData.map((event) => (
          <div>{event.name.bandName}</div>
        ))}
      </div>
    );
}

// export default function Filter() {

//   return (

//     <div>

//       <div className='filter-categories'>
//         <div>genre</div>
//         <div>price</div>
//         <div>neighborhood</div>
//         <div>venue type</div>
//         </div>

//       <div className="filer-radio-boxes">
//         <label>
//           <input type="radio" name="genre" value={genre}></input>Electronic
//         </label>
//         <label>
//           <input type="radio" name="genre" value={genre} checked={}></input>Hip-Hop
//         </label>
//         <label>
//           <input type="radio" name="genre" value={genre}></input>Pop
//         </label>
//       </div>

//     </div>
//   );
// }

// return (
//     <div>
//       {venueType
//         .filter((type) => type === venueType[2])
//         .map((filteredGenre) => (
//           <li>{filteredGenre}</li>
//         ))}
//     </div>
//   );