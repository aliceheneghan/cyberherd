import React from 'react';

export default function EventCard({ className, children }) {
  return (
    <div className={className}>
      <div className="info-wrapper">
        <h1>{children.name.bandName}</h1>
      </div>
    </div>
  );
}
