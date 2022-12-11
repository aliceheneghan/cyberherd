// libraries
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

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
      console.log('this is userID:', userID);
      console.log(`dashboard testing to see:`);
      console.log(`dashboard data:`, data);

      console.log('users_ID', data?.user?._id);

      setUserData(data);
    };
    getUser();
  }, [id]);

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

    // <section className="my-dashboard">
    //   <div className="my-dashboard-header"></div>
    //   <div className="dates-header-and-saved-events-container">
    //     <div className="my-dates-header">My Dates</div>
    //     <div className="saved-events-container">
    //       <div className="saved-event-eventcard">
    //         <div className="saved-event-thumbnail"></div>
    //         <div className="saved-event-name-of-event">Reggae Ignition</div>
    //         <div className="saved-event-name-of-band">Bob Marley</div>
    //       </div>

    //       <div className="saved-event-eventcard">
    //         <div className="event-thumbnail"></div>
    //         <div className="saved-event-name-of-event">Reggae Ignition</div>
    //         <div className="saved-event-name-of-band">Bob Marley</div>
    //       </div>

    //       <div className="saved-event-eventcard">
    //         <div className="event-thumbnail"></div>
    //         <div className="saved-event-name-of-event">Reggae Ignition</div>
    //         <div className="saved-event-name-of-band">Bob Marley</div>
    //       </div>

    //       <div className="saved-event-eventcard">
    //         <div className="event-thumbnail"></div>
    //         <div className="saved-event-name-of-event">Reggae Ignition</div>
    //         <div className="saved-event-name-of-band">Bob Marley</div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
