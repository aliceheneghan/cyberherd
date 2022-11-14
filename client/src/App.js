import { Routes, Route } from "react-router-dom";

// components
import Banner from './components/Banner.jsx';
import Calendar from "./components/Calendar.jsx";
import Navbar from "./components/Navbar.jsx";

// pages
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/Sign-up/index.jsx";

// Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <Banner />
      <Navbar />
      <Routes>
       <Route path="/" element={<Calendar />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    
    </div>
  );
}

export default App;