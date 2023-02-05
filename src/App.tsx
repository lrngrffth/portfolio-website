import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Routes>
        <Route path="" element={<AboutMe/>}/>
        <Route path="education" element={<Education/>}/>
        <Route path="experience" element={<Experience/>}/>
      </Routes>
    </Router>
  );
}

export default App;
