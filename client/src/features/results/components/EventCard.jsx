import React from 'react';

export default function EventCard({ className, children }) {
  const title = children.name.bandName;

  // title length/size logic
  let titleFontSize = 'title-big';
  if (title.length > 11) {
    titleFontSize ='title-small';
  }
  
  return (
    <div className={className}>
      <div className="event-wrapper">
        <div className={`title ${titleFontSize}`}>{title}</div>
        <div className="line-wrapper">
          <div className="line-space-between">
            <div>Location:</div> <div>{children.location}</div>
          </div>
          <div className="line-space-between">
            <div>Genre:</div>
            <div>{children.genre}</div>
          </div>
        </div>
        <div className="more">...more</div>
      </div>
    </div>
  );
}
