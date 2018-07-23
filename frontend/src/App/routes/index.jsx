import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute, LoginScreen } from '../../Authentication';

import { HomePage, NotFoundPage } from '../../Layout';

import { DashboardPage }      from '../../Dashboard';
import { OffersPage }         from '../../Offers';
import { ServersPage }        from '../../Servers';
import { TrafficSourcesPage } from '../../TrafficSources';
import { ContactsPage }       from '../../Contacts';
import { SegmentsPage }       from '../../Segments';
import { ComponentsPage }     from '../../Components';
import { CampaignsListPage, CampaignsCreatePage }      from '../../Campaigns';
import { ReportsPage }        from '../../Reports';

import { AccountPage }       from '../../Account';
import { NotificationsPage } from '../../Notifications';

import { CategoriesPage }                from '../../Categories';
import { ConfigurationPage }             from '../../Configuration';
import { UsersPage }                     from '../../Users';
import { createRolePage, listRolesPage } from '../../Roles';
import { WebhooksPage }                  from '../../Webhooks';
import { CustomFieldsPage }              from '../../CustomFields';


export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <AuthenticatedRoute exact path="/" component={HomePage} activeMenuItem='' />

      (// sidebar links)
      <AuthenticatedRoute exact path="/dashboard" component={DashboardPage} activeMenuItem='dashboard' />
      <AuthenticatedRoute exact path="/offers" component={OffersPage} activeMenuItem='offers' />
      <AuthenticatedRoute exact path="/servers" component={ServersPage} activeMenuItem='servers' />
      <AuthenticatedRoute exact path="/traffic-sources" component={TrafficSourcesPage} activeMenuItem='traffic-sources' />
      <AuthenticatedRoute exact path="/contacts" component={ContactsPage} activeMenuItem='contacts' />
      <AuthenticatedRoute exact path="/segments" component={SegmentsPage} activeMenuItem='segments' />
      <AuthenticatedRoute exact path="/components" component={ComponentsPage} activeMenuItem='components' />

      <AuthenticatedRoute exact path="/campaigns" component={CampaignsListPage} activeMenuItem='campaigns' />
      <AuthenticatedRoute exact path="/campaigns/new" component={CampaignsCreatePage} activeMenuItem='campaigns' />

      <AuthenticatedRoute exact path="/reports" component={ReportsPage} activeMenuItem='reports' />

      (// Navbar Links)
      <AuthenticatedRoute exact path="/account" component={AccountPage} activeMenuItem='' />
      <AuthenticatedRoute exact path="/notifications" component={NotificationsPage} activeMenuItem='' />

      (// Settings Links)
      <AuthenticatedRoute exact path="/categories" component={CategoriesPage} activeMenuItem='categories' />
      <AuthenticatedRoute exact path="/configuration" component={ConfigurationPage} activeMenuItem='configuration' />
      <AuthenticatedRoute exact path="/users" component={UsersPage} activeMenuItem='users' />

      <AuthenticatedRoute exact path="/roles" component={listRolesPage} activeMenuItem='roles' />
      <AuthenticatedRoute exact path="/roles/new" component={createRolePage} activeMenuItem='roles' />

      <AuthenticatedRoute exact path="/webhooks" component={WebhooksPage} activeMenuItem='webhooks' />
      <AuthenticatedRoute exact path="/custom-fields" component={CustomFieldsPage} activeMenuItem='custom-fields' />

      <Route component={NotFoundPage} activeMenuItem='' />
    </Switch>
  );
}
