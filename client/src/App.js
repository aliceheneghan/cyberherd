import { Routes, Route } from "react-router-dom";

// components
import { Banner } from './features/banner/index.jsx';
import { Calendar } from "./features/calendar/index.jsx";
import { Navbar } from "./features/navbar/index.jsx";

// features
import { Login } from "./features/login-form/index.jsx";
import{ SignUp } from "./features/sign-up-form/index.jsx";

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
      </Routes>
    
    </div>
  );
}

export default App;