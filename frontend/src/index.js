/* eslint-disable react/jsx-filename-extension */
import 'admin-lte/dist/css/skins/skin-green.css';
import 'ionicons/dist/css/ionicons-core.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'admin-lte/dist/css/AdminLTE.css';
import $ from 'jquery';

import React               from 'react';
import ReactDOM            from 'react-dom';
import { Provider }        from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import fetch  from "node-fetch";
import cookie from "react-cookies";

import { ApolloLink }     from "apollo-link";
import { HttpLink }       from 'apollo-link-http';
import { ApolloClient }   from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache }  from 'apollo-cache-inmemory';

import { configureStore, history, Routes } from './App';
import registerServiceWorker               from './registerServiceWorker';

import './index.css';


// eslint-disable-next-line no-multi-assign
window.jQuery = window.$ = $;
require('babel-polyfill');
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');

const GRAPHQL_URI = process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:8000/graphql';
const httpLink = new HttpLink({uri: GRAPHQL_URI, fetch: fetch, credentials: 'same-origin'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({headers: {'X-CSRFToken': cookie.load('csrftoken') || null}});
  return forward(operation);
});

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

const store = configureStore();

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

if (window.location.protocol === 'https:') {
  registerServiceWorker()
}