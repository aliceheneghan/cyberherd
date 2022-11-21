// libraries
import { Routes, Route } from "react-router-dom";

// features
import Banner from './features/banner/index.jsx';
import Calendar from "./features/calendar/index.jsx";
import Navbar from "./features/navbar/index.jsx";
import SignUp from "./features/sign-up-form/index.jsx";

// pages

// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      
      <Banner />
      <Navbar />
      <Routes>
       <Route path="/" element={<Calendar />}/>
       {/* <Route path="/login" element={<Login />}/> ???? */}
       <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    
    </div>
  );
}