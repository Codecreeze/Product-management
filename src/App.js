import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path ="/dashboard" element= {<Dashboard /> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
