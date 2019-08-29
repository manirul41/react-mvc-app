import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../components/dashboard/Dashboard';
import Login from '../components/login/Login';

const MainRoute = () => (
  <main>
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
    </Switch>
  </main>
);

export { MainRoute };
