// libraries
import { Routes, Route } from "react-router-dom";

// features
import { Banner } from './features/banner/index.jsx';
import Calendar from "./features/calendar/index.jsx";
import { Navbar } from "./features/navbar/index.jsx";

// pages
import Login from "./pages/Login.jsx";

// styles
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