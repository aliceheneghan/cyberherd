// libraries
import { Routes, Route } from 'react-router-dom';

// features
import Banner from './features/banner/index.jsx';
import Calendar from './features/calendar/index.jsx';
import Navbar from './features/navbar/index.jsx';
import Dashboard from './features/dashboard/components/MyDashboard.jsx';
import CreateEvent from './features/event-form/components/CreateEvent.jsx';
import CreateVenue from './features/venue-form/components/CreateVenue.jsx';

// pages
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import EventPage from './pages/EventPage.jsx';
import VenuePage from './pages/VenuePage.jsx';
<<<<<<< HEAD
import Results from './pages/Results.jsx';
=======
import ResultPage from './pages/ResultPage.jsx';
>>>>>>> 1c979b75b2dcefc6f06fdc2efadb0c77ca9800a4

// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/login?date" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
<<<<<<< HEAD
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/results/:date" element={<Results />} />
=======
        <Route path="/results" element={<ResultPage/>} />
>>>>>>> 1c979b75b2dcefc6f06fdc2efadb0c77ca9800a4
        <Route path="/eventpage/:id" element={<EventPage />} />
        <Route path="/venuepage/:id" element={<VenuePage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-venue" element={<CreateVenue />} />
      </Routes>
    </div>
  );
}
