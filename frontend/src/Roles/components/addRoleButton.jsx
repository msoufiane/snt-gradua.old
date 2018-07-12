import React from 'react';
import { Link } from 'react-router-dom';

const addRoleButton = function addRoleButton() {
  return (
    <Link className="btn btn-default" to="/roles/new" style={{ marginTop : '20px', marginBottom : '10px'}}>
      <span><i className="fa fa-plus" /> <span className="hidden-xs hidden-sm">New</span></span>
    </Link>
  );
};

export default addRoleButton;
