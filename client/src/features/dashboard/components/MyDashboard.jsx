// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

// context
import { Context } from '../../../context/Context.jsx';

// components
import EventCard from '../../results/components/EventCard.jsx';

// style
import './_my-dashboard.scss';

// http://localhost:4000/image
export default function Dashboard() {
  const { setUserID, userID, setUserData, userData } = useContext(Context);

  // state
  const [resultData, setResultData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    console.log('clg in MYDashboard useEffect', id);
    const getUser = async (e) => {
      const { data } = await axios.get(`/api/user/${id}`);
      const { data: eventsData } = await axios.get(
        `/api/events/byuserid/${userID}`
      );
      console.log('this is userID:', userID);
      console.log(`dashboard testing to see:`);
      console.log(`dashboard data:`, data);

      console.log('users_ID', data?.user?._id);
      console.log('eventsData', eventsData);

      setUserData(data);
      setResultData(eventsData.events);
      // return eventsData
    };
    getUser();
  }, [id]);

  // navigate
  const navigate = useNavigate();

  // handlers
  const navigateToEvent = () => navigate(`/eventpage/${id}`);

  //  title length/size logic
  const title = resultData.map((event) => event.name.bandName);
  let titleFontSize = 'title-big';
  if (title.length > 11) {
    titleFontSize = 'title-small';
  }
  console.log('Dashboard + userID', userID);
  console.log('userData: ', userData);

  return (
    <section className="my-dashboard">
      <div className="event-list-wrapper">
        <div>
          <div className="event-card-wrapper">
            {resultData.map((event, i) => {
              console.log(event);
              return (
                <EventCard key={i} className="event-card">
                  {event}
                </EventCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
