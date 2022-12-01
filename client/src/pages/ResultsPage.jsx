// libraries
import React from 'react';
import Navbar from '../features/navbar';

// features
import EventList from '../features/results/index';
import { DefaultNavbar } from '../styled-components/navBar-styled-component';

export default function ResultsPage() {
  return (
    <>
      <DefaultNavbar>
        <Navbar />
      </DefaultNavbar>
      <EventList />
    </>
  );
}
