import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from 'HomePage.js';
import PlayerProfilePage from 'PlayerProfile.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/PlayerProfilePage" component={PlayerProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
