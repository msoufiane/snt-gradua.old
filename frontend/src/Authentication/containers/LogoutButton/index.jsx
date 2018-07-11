import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = function LogoutButton(props) {
    const { onLogoutClick } = props;

    return (
      <button onClick={() => onLogoutClick()} className="btn btn-default btn-flat">
        <i className="fa fa-sign-out fs-14" />&nbsp;Logout
      </button>
    );
};

LogoutButton.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};

export default LogoutButton;
