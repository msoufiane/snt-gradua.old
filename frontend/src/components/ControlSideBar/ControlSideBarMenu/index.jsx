import React from 'react';
import PropTypes from "prop-types";
import { ControlSideBarItem } from "../";

const ControlSideBarMenu = function ControlSideBarMenu(props) {
  const {
    activeItem: ActiveItem,
  } = props;

  return (
    <ul className="control-sidebar-menu">
      <ControlSideBarItem active={ActiveItem === 'categories'} link="/categories" logo="folder" text="Categories"  />
      <ControlSideBarItem active={ActiveItem === 'configuration'} link="/configuration" logo="cogs" text="Configuration"  />
      <ControlSideBarItem active={ActiveItem === 'users'} link="/users" logo="users" text="Users"  />
      <ControlSideBarItem active={ActiveItem === 'roles'} link="/roles" logo="lock" text="Roles"  />
      <ControlSideBarItem active={ActiveItem === 'webhooks'} link="/webhooks" logo="exchange" text="Webhooks"  />
      <ControlSideBarItem active={ActiveItem === 'custom-fields'} link="/custom-fields" logo="list" text="Custom Fields"  />
    </ul>
  );
};


ControlSideBarMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default ControlSideBarMenu;
