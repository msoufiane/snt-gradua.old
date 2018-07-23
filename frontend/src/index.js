/* eslint-disable react/jsx-filename-extension */
import $ from 'jquery';
import 'admin-lte/dist/css/AdminLTE.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'ionicons/dist/css/ionicons-core.css';
import 'admin-lte/dist/css/skins/skin-green.css';

import React                         from 'react';
import ReactDOM                      from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter }           from 'react-router-redux';

import fetch  from "node-fetch";
import cookie from "react-cookies";

import { ApolloLink }     from "apollo-link";
import { ApolloProvider } from "react-apollo";
import { ApolloClient }   from "apollo-client";
import { HttpLink }       from 'apollo-link-http';
import { InMemoryCache }  from 'apollo-cache-inmemory';

import { registerServiceWorker, configureStore, history, Routes } from './App';
import './index.css';

window.jQuery = window.$ = $; // eslint-disable-line no-multi-assign
require('babel-polyfill');
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');
require('select2');

const GRAPHQL_URI = process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:8000/graphql';
const httpLink = new HttpLink({uri: GRAPHQL_URI, fetch: fetch, credentials: 'same-origin'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-CSRFToken': cookie.load('csrftoken') || null,
      // 'Authorization': 'Token '.concat(localStorage.getItem('id_token') || null) // TODO enforce authentication
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ReduxProvider>
  </ApolloProvider>,
  document.getElementById('wrapper'),
);

if (window.location.protocol === 'https:') {
  registerServiceWorker();
}