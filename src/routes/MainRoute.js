import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../components/dashboard/Dashboard';

const MainRoute = () => (
  <main>
    <Switch>
          <Route exact path="/" component={Dashboard} />
    </Switch>
  </main>
);

export { MainRoute };
