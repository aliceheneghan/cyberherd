// libraries
import React from 'react';

// features
import MyDashboard from '../features/dashboard';
import MapDashboard from '../features/dashboard/components/MapDashboard';
// import PastEventsDashboard from '../features/dashboard/components/PastEventsDashboard';
import Navbar from '../features/navbar/index.jsx';
import { DefaultNavbar } from '../styled-components/navBar-styled-component';
export default function DashboardPage() {
  return (
    <>
      <DefaultNavbar>
        <Navbar />
      </DefaultNavbar>
      <div className="dashboard-container">
        <MyDashboard />
        <MapDashboard />
        {/* <PastEventsDashboard /> */}
      </div>
    </>
  );
}