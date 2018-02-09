import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../screens/Login';
import HomePage from '../screens/HomePage';

import Dashboard from '../screens/Dashboard';
import Offers from '../screens/Offers';
import Servers from '../screens/Servers';
import TrafficSources from '../screens/TrafficSources';
import Contacts from '../screens/Contacts';
import Segments from '../screens/Segments';
import Components from '../screens/Components';
import Campaigns from '../screens/Campaigns';
import Reports from '../screens/Reports';

import Account from '../screens/Account';

import Categories from '../screens/Categories';
import Configuration from '../screens/Configuration';
import Users from '../screens/Users';
import Roles from '../screens/Roles';
import Webhooks from '../screens/Webhooks';
import CustomFields from '../screens/CustomFields';

import NotFoundPage from '../screens/NotFoundPage';

import AuthenticatedRoute from './AuthenticatedRoute';

const Routes = function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <AuthenticatedRoute exact path="/" component={HomePage} />

      (// sidebar links)
      <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
      <AuthenticatedRoute exact path="/offers" component={Offers} />
      <AuthenticatedRoute exact path="/servers" component={Servers} />
      <AuthenticatedRoute exact path="/traffic-sources" component={TrafficSources} />
      <AuthenticatedRoute exact path="/contacts" component={Contacts} />
      <AuthenticatedRoute exact path="/segments" component={Segments} />
      <AuthenticatedRoute exact path="/components" component={Components} />
      <AuthenticatedRoute exact path="/campaigns" component={Campaigns} />
      <AuthenticatedRoute exact path="/reports" component={Reports} />

      (// Navbar Links)
      <AuthenticatedRoute exact path="/account" component={Account} />

      (// Settings Links)
      <AuthenticatedRoute exact path="/categories" component={Categories} />
      <AuthenticatedRoute exact path="/configuration" component={Configuration} />
      <AuthenticatedRoute exact path="/users" component={Users} />
      <AuthenticatedRoute exact path="/roles" component={Roles} />
      <AuthenticatedRoute exact path="/webhooks" component={Webhooks} />
      <AuthenticatedRoute exact path="/custom-fields" component={CustomFields} />

      <AuthenticatedRoute component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;