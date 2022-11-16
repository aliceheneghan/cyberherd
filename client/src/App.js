import { Routes, Route } from "react-router-dom";

// components
import { Banner } from './features/banner/index.jsx';
import { Calendar } from "./features/calendar/index.jsx";
import { Navbar } from "./features/navbar/index.jsx";

// features
import { Login } from "./features/login-form/index.jsx";
import { SignUp } from "./features/sign-up-form/index.jsx";
import { CreateEvent } from "./features/event-form/index.jsx";

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
       <Route path="/sign-up" element={<SignUp />}/>
       <Route path="/create-event" element={<CreateEvent/>}/>
      </Routes>
    
    </div>
  );
}

export default App;