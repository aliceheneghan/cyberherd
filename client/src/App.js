import { Routes, Route } from "react-router-dom";

// Components
import { Banner } from './features/banner/index.jsx';
import { Calendar } from "./features/calendar/index.jsx";
import { Navbar } from "./features/navbar/index.jsx";

// Pages
import Login from "./pages/Login.jsx";
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