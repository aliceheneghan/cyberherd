import React from 'react';

export default function EventCard({ className, children }) {
  return (
    <div className={className}>
      <div className="info-wrapper">
        <h1>{children.name.bandName}</h1>
        <div className="line-wrapper">
          <div>Location:</div> <div>{children.location}</div>
        </div>
        <div className="line-wrapper">
          <div>Genre:</div>
          <div>{children.genre}</div>
        </div>
      </div>
    </div>
  );
}
