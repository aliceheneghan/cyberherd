import { Routes, Route } from "react-router-dom";

// Components
import Banner from './components/Banner.jsx';
import Calendar from "./components/Calendar.jsx";

// Styles
import './App.scss';

function App() {
  return (
    <div className="App">

      <Banner />
      <Calendar />
      <Routes>
       {/* <Route path="/" element={}/>  */}
      </Routes>

    </div>
  );
}

export default App;
