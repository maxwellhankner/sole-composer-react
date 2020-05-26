import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing.js'
import Designer from './pages/Designer/Designer.js'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/designer" component={Designer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
