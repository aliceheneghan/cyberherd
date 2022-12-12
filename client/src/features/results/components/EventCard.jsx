// libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ className, children }) {
  // navigate
  const navigate = useNavigate();

  // handlers
  const navigateToEvent = () => navigate(`/eventpage/${children._id}`);

  // title length/size logic
  const title = children.name.bandName;
  let titleFontSize = 'title-big';
  if (title.length > 11) {
    titleFontSize = 'title-small';
  }

  return (
      <div onClick={navigateToEvent} className="event-card">
        <div className="event-wrapper">
          <div className={`title ${titleFontSize}`}>{title}</div>
          <div className="line-wrapper">
            <div className="line-space-between">
              <div>Location:</div> <div>{children.location.name}</div>
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
