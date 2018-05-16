import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';

import { LoginScreen }            from '../../Authentication';
import { HomePage, NotFoundPage } from '../../Layout';

import Dashboard      from '../../screens/Dashboard';
import Offers         from '../../screens/Offers';
import Servers        from '../../screens/Servers';
import TrafficSources from '../../screens/TrafficSources';
import Contacts       from '../../screens/Contacts';
import Segments       from '../../screens/Segments';
import Components     from '../../screens/Components';
import Campaigns      from '../../screens/Campaigns';
import Reports        from '../../screens/Reports';

import Account       from '../../screens/Account';
import Notifications from '../../screens/Notifications';

import Categories                from '../../screens/Categories';
import Configuration             from '../../screens/Configuration';
import Users                     from '../../screens/Users';
import { createRole, listRoles } from '../../screens/Roles';
import Webhooks                  from '../../screens/Webhooks';
import CustomFields              from '../../screens/CustomFields';


export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <AuthenticatedRoute exact path="/" component={HomePage} activeMenuItem='' />

      (// sidebar links)
      <AuthenticatedRoute exact path="/dashboard" component={Dashboard} activeMenuItem='dashboard' />
      <AuthenticatedRoute exact path="/offers" component={Offers} activeMenuItem='offers' />
      <AuthenticatedRoute exact path="/servers" component={Servers} activeMenuItem='servers' />
      <AuthenticatedRoute exact path="/traffic-sources" component={TrafficSources} activeMenuItem='traffic-sources' />
      <AuthenticatedRoute exact path="/contacts" component={Contacts} activeMenuItem='contacts' />
      <AuthenticatedRoute exact path="/segments" component={Segments} activeMenuItem='segments' />
      <AuthenticatedRoute exact path="/components" component={Components} activeMenuItem='components' />
      <AuthenticatedRoute exact path="/campaigns" component={Campaigns} activeMenuItem='campaigns' />
      <AuthenticatedRoute exact path="/reports" component={Reports} activeMenuItem='reports' />

      (// Navbar Links)
      <AuthenticatedRoute exact path="/account" component={Account} activeMenuItem='' />
      <AuthenticatedRoute exact path="/notifications" component={Notifications} activeMenuItem='' />

      (// Settings Links)
      <AuthenticatedRoute exact path="/categories" component={Categories} activeMenuItem='categories' />
      <AuthenticatedRoute exact path="/configuration" component={Configuration} activeMenuItem='configuration' />
      <AuthenticatedRoute exact path="/users" component={Users} activeMenuItem='users' />

      <AuthenticatedRoute exact path="/roles" component={listRoles} activeMenuItem='roles' />
      <AuthenticatedRoute exact path="/roles/new" component={createRole} activeMenuItem='roles' />

      <AuthenticatedRoute exact path="/webhooks" component={Webhooks} activeMenuItem='webhooks' />
      <AuthenticatedRoute exact path="/custom-fields" component={CustomFields} activeMenuItem='custom-fields' />

      <Route component={NotFoundPage} activeMenuItem='' />
    </Switch>
  );
}
