// libraries
import { Routes, Route } from 'react-router-dom';

// features
import Banner from './features/banner/index.jsx';
import CreateEvent from './features/event-form/components/CreateEvent.jsx';
import CreateVenue from './features/venue-form/components/CreateVenue.jsx';
import Footer from './features/footer/index.jsx';

// pages
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Home from './pages/Home.jsx';
import EventPage from './pages/EventPage.jsx';
import VenuePage from './pages/VenuePage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx';

// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/results/:date" element={<ResultsPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/dashboard/:id" element={<DashboardPage />} />
        <Route path="/eventpage/:eventid" element={<EventPage />} />
        <Route path="/venuepage/:venueid" element={<VenuePage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-venue" element={<CreateVenue />} />
      </Routes>
      <Footer />
    </div>
  );
}