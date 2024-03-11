import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';
import PlayerProfilePage from './PlayerProfilePage.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
                          {/* component */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/PlayerProfilePage" element={<PlayerProfilePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;