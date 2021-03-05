import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Details, Home } from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/:id" component={ Details } />
      <Route path="*" component={ () => <h1>Page not found</h1> } />
    </Switch>
  </Router>
);

export default Routes;
