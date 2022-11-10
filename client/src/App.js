import { Routes, Route } from "react-router-dom";

// Components
import Banner from './components/Banner.jsx';
import Calendar from "./components/Calendar.jsx";
import Navbar from "./components/Navbar.jsx";

// Pages
import Login from "./pages/Login/index.jsx";

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
      </Routes>
    
    </div>
  );
}

export default App;