import React     from 'react';
import PropTypes from 'prop-types';
import Gravatar  from 'react-gravatar';
import { Link }  from 'react-router-dom';

import LogoutButton from '../../../../Authentication/containers/LogoutButton';


const ProfileComponent = ({user, handleLogout}) => {
  const {firstName, lastName, email, username} = user;
  const capitaize = string => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <li className="dropdown user user-menu">
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <Gravatar email={email} size={160} className="user-image" alt="User" />
        <span className="hidden-xs">{capitaize(firstName)} {capitaize(lastName)}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <Gravatar email={email} size={160} className="img-circle" alt="User" />
          <p>
            {capitaize(firstName)} {capitaize(lastName)} - {username}
          </p>
        </li>

        <li className="user-footer">
          <div className="pull-left">
            <Link to="/account" className="btn btn-default btn-flat">
              <i className="fa fa-user fs-14" />&nbsp;Account
            </Link>
          </div>
          <div className="pull-right">
            <LogoutButton onLogoutClick={() => handleLogout()} />
          </div>
        </li>
      </ul>
    </li>
  );
};

ProfileComponent.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileComponent;
