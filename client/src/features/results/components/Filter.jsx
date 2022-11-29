import React from 'react';

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
    return <div>
        {venueType.filter(type => type === venueType[2]).map(filteredGenre => (
            <li>{filteredGenre}</li>
        ))}
    </div>
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
