// libraries
import React from 'react';

// features
import MyDashboard from '../features/dashboard';
import MapDashboard from '../features/dashboard/components/MapDashboard';
import PastEventsDashboard from '../features/dashboard/components/PastEventsDashboard';

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <MyDashboard />
      <MapDashboard />
      <PastEventsDashboard />
    </div>
  );
}
