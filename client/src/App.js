import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Banner from './components/Banner';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
      <Routes>
        {/* <Route path="/" element={}/>  */}
        <Route/>
        <Route/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
