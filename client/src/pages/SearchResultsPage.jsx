// libraries
import React from 'react';
import Navbar from '../features/navbar';

// features
import { DefaultNavbar } from '../styled-components/navBar-styled-component';
import SearchResults from '../features/results/components/SearchResults';

export default function SearchResultsPage() {
  return (
    <div>
      <DefaultNavbar>
        <Navbar />
      </DefaultNavbar>
      <SearchResults />
    </div>
  );
}
