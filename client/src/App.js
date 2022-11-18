import { Routes, Route } from 'react-router-dom';

// components
import { Banner } from './features/banner/index.jsx';
import { Calendar } from './features/calendar/index.jsx';
import { Navbar } from './features/navbar/index.jsx';
import Dashboard from './pages/Dashboard.jsx';

// pages
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

// // features

// import { Login } from './features/login-form/index.jsx';
// import { SignUp } from './features/sign-up-form/index.jsx';


// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Routes>

        <Route path="/" element={<Calendar />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

      </Routes>
    </div>
  );
}
