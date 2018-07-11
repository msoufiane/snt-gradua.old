/**
 * Created by soufiaane on 7/3/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import LogoutButton from '../../../../Authentication/containers/LogoutButton';
import {logoutUser} from '../../../../Authentication/api';


class ProfileContainer extends Component {
  render() {
    const { user, handleLogout } = this.props;
    const capitaize = string => string.charAt(0).toUpperCase() + string.slice(1);

    return ( user &&
      <li className="dropdown user user-menu">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <Gravatar email={user.email} size={160} className="user-image" alt="User" />
          <span className="hidden-xs">{capitaize(user.first_name)} {capitaize(user.last_name)}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <Gravatar email={user.email} size={160} className="img-circle" alt="User" />
            <p>
              {capitaize(user.first_name)} {capitaize(user.last_name)} - {user.username}
            </p>
          </li>

          <li className="user-footer">
            <div className="pull-left">
              <Link to="/account" className="btn btn-default btn-flat"><i className="fa fa-user fs-14" />&nbsp;Account</Link>
            </div>
            <div className="pull-right">
              <LogoutButton onLogoutClick={() => handleLogout()} />
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

ProfileContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object),
};

ProfileContainer.defaultProps = {
  user: {}
};


const mapStateToProps = () => ({
  user: JSON.parse(localStorage.getItem('user')),
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => logoutUser(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
