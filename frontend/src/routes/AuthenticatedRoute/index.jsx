import React     from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { connect }         from 'react-redux';

import App from '../../App';

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
          (<App activeItem={ActiveMenuItem}><Component /></App>)
          :
          (<Redirect to={{pathname: '/login', state: {from: location}}} />)
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