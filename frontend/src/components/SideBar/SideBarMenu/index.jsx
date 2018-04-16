import React from 'react';
import PropTypes from "prop-types";
import { MenuItem, MenuTree } from "../";

const SideBarMenu = function SideBarMenu(props) {
  const {
    activeItem: ActiveItem,
  } = props;

  return (
    <ul className="sidebar-menu" data-widget="tree">
      <MenuItem active={ActiveItem === 'dashboard'} link="/dashboard" logo="dashboard" text="Dashboard"  />
      <MenuItem active={ActiveItem === 'offers'} link="/offers" logo="dollar" text="Offers"  />
      <MenuItem active={ActiveItem === 'servers'} link="/servers" logo="hdd-o" text="Servers"  />
      <MenuItem active={ActiveItem === 'traffic-sources'} link="/traffic-sources" logo="bullhorn" text="Traffic Sources"  />
      <MenuItem active={ActiveItem === 'contacts'} link="/contacts" logo="user" text="Contacts"  />
      <MenuItem active={ActiveItem === 'segments'} link="/segments" logo="pie-chart" text="Segments"  />

      <MenuTree active={ActiveItem === 'components'} logo="puzzle-piece" text="Components">
        <MenuItem active={ActiveItem === 'components'} link="/components" logo="dot-circle-o" text="Assets"  />
        <MenuItem active={ActiveItem === 'components'} link="/components" logo="dot-circle-o" text="Forms"  />
        <MenuItem active={ActiveItem === 'components'} link="/components" logo="dot-circle-o" text="Landing Pages"  />
        <MenuItem active={ActiveItem === 'components'} link="/components" logo="dot-circle-o" text="Dynamic Contents"  />
      </MenuTree>

      <MenuItem active={ActiveItem === 'campaigns'} link="/campaigns" logo="paper-plane" text="Campaigns"  />
      <MenuItem active={ActiveItem === 'reports'} link="/reports" logo="line-chart" text="Reports"  />
    </ul>
  );
};


SideBarMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default SideBarMenu;
