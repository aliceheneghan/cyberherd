import { Routes, Route } from "react-router-dom";

// Components
import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">

      <Banner />
      <Navbar />
      <Routes>
       {/* <Route path="/" element={}/>  */}
      </Routes>

    </div>
  );
}

export default App;
