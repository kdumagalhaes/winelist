import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import RegisterPage from './pages/RegisterPage/RegisterPage'
import WinePage from './pages/WinePage/WinePage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/wines" exact component={WinePage} />
      </Switch>
    </BrowserRouter>
  );
}
