import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProvider from '../../UserProvider';
import Landing from '../Landing';
import Designer from '../Designer';
import Login from '../Login';
import Profile from '../Profile';
import NoPage from '../NoPage';
import { AppContainer } from './styledComponents';
import 'sanitize.css';

function App() {
  return (
    <AppContainer>
      <Router>
        <UserProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/designer" component={Designer} />
            <Route exact path="/designer/:id" component={Designer} />
            <Route path="*" component={NoPage} />
          </Switch>
        </UserProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
