import { useEffect, useState } from 'react';

export default function Radio(){
  return (
      <div className="radio-buttons">
        <input type="radio" name="radioButton" value="all" />
        All
        <input type="radio" name="radioButton" value="Electronic" />
        Electronic
        <input type="radio" name="radioButton" value="Krautrock" />
        Krautrock
      </div>
  );
};
