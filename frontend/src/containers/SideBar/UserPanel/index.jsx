import React from 'react';
import Gravatar from 'react-gravatar'


const UserPanel = function UserPanel() {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <Gravatar email="" size={160} className="img-circle" alt="User" />
      </div>
      <div className="pull-left info">
        <p>Alexander Pierce</p>
        <a href=""><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
  );
};

export default UserPanel;
