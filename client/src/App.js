import { Routes, Route } from "react-router-dom";

// Components
import Banner from './components/Banner.jsx';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">

      <Banner />
      <Routes>
       {/* <Route path="/" element={}/>  */}
      </Routes>

    </div>
  );
}

export default App;
