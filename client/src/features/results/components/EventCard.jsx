// libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ children }) {
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

  //date formatting
  const eventSchemaDate = children?.date;
  const Day = new Date(eventSchemaDate);
  const dayOfWeek = Day.toUTCString().slice(0, -26);
  const eventDateFormatted =
    Day.getDate() + '.' + (Day.getMonth() + 1) + '.' + Day.getFullYear();

  console.log('eventDateFormatted', dayOfWeek, eventDateFormatted);
  console.log('EventDate: ', dayOfWeek, eventDateFormatted);
  console.log('children: ', children);
  return (
    <div onClick={navigateToEvent} className="event-card">
      <div className="event-wrapper">
        <div className="event-card-event-date">
          {dayOfWeek} {eventDateFormatted}
        </div>
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
        <div className="event-card-more">...more</div>
      </div>
    </div>
  );
}