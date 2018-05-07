import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import fetch from "node-fetch";
import cookie from "react-cookies";
import { ApolloProvider } from 'react-apollo';
import {ApolloClient} from "apollo-client/index";
import {HttpLink} from "apollo-link-http/lib/index";
import {ApolloLink, concat} from "apollo-link/lib/index";
import {InMemoryCache} from "apollo-cache-inmemory/lib/index";

import App from '../../App';

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql', fetch: fetch, credentials: 'same-origin'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-CSRFToken': cookie.load('csrftoken') || null,
    }
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

const AuthenticatedRoute = function AuthenticatedRoute(props) {
  const {
    component: Component,
    activeMenuItem: ActiveMenuItem,
    location,
    isLogged,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={() => (isLogged ?
          (<ApolloProvider client={client}><App activeItem={ActiveMenuItem}><Component /></App></ApolloProvider>)
      :
      (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
      )}
    />
  );
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
  activeMenuItem: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isLogged: !!state.authUser.token,
});

export default connect(mapStateToProps, null)(AuthenticatedRoute);