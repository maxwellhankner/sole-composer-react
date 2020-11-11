import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import UserProvider from './context/UserProvider';
import Landing from './pages/Landing/Landing';
import Designer from './pages/Designer/Designer';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Switch>
          <UserProvider>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/designer' component={Designer} />
            <Route exact path='/designer/:id' component={Designer} />
          </UserProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
