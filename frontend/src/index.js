/* eslint-disable react/jsx-filename-extension */
import 'admin-lte/dist/css/skins/skin-green.css';
import 'ionicons/dist/css/ionicons-core.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'admin-lte/dist/css/AdminLTE.css';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';

import Routes from './routes/index';
import './index.css';

// eslint-disable-next-line no-multi-assign
window.jQuery = window.$ = $;
require('babel-polyfill');
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');

const store = configureStore();

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({ uri: 'http://localhost:8000/graphql', fetch: fetch }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('wrapper'),
);


registerServiceWorker();