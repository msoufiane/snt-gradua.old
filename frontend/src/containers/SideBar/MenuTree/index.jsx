import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const MenuTree = function MenuTree(props) {
  const {
    activeItem: ActiveItem,
  } = props;

  return (
    <ul className="sidebar-menu" data-widget="tree">
      <li className={ActiveItem === 'dashboard' ? 'active' : ''}>
        <Link to="/dashboard">
          <i className="fa fa-dashboard" /> <span>Dashboard</span>
        </Link>
      </li>

      <li className={ActiveItem === 'offers' ? 'active' : ''}>
        <Link to="/offers">
          <i className="fa fa-dollar" /> <span>Offers</span>
        </Link>
      </li>

      <li className={ActiveItem === 'servers' ? 'active' : ''}>
        <Link to="/servers">
          <i className="fa fa-hdd-o" /> <span>Servers</span>
        </Link>
      </li>

      <li className={ActiveItem === 'traffic-sources' ? 'active' : ''}>
        <Link to="/traffic-sources">
          <i className="fa fa-bullhorn" /> <span>Traffic Sources</span>
        </Link>
      </li>

      <li className={ActiveItem === 'contacts' ? 'active' : ''}>
        <Link to="/contacts">
          <i className="fa fa-user" /> <span>Contacts</span>
        </Link>
      </li>

      <li className={ActiveItem === 'segments' ? 'active' : ''}>
        <Link to="/segments">
          <i className="fa fa-pie-chart" /> <span>Segments</span>
        </Link>
      </li>

      <li className={'treeview' + (ActiveItem === 'components' ? ' active' : '')}>
        <a href="#"><i className="fa fa-puzzle-piece" /> <span>Components</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li className={ActiveItem === 'components' ? 'active' : ''}><Link to="/components"><i className="fa fa-dot-circle-o" />Assets</Link></li>
          <li className={ActiveItem === 'components' ? 'active' : ''}><Link to="/components"><i className="fa fa-dot-circle-o" />Forms</Link></li>
          <li className={ActiveItem === 'components' ? 'active' : ''}><Link to="/components"><i className="fa fa-dot-circle-o" />Landing Pages</Link></li>
          <li className={ActiveItem === 'components' ? 'active' : ''}><Link to="/components"><i className="fa fa-dot-circle-o" />Dynamic Contents</Link></li>
        </ul>
      </li>

      <li className={ActiveItem === 'campaigns' ? 'active' : ''}>
        <Link to="/campaigns">
          <i className="fa fa-paper-plane" /> <span>Campaigns</span>
        </Link>
      </li>

      <li className={ActiveItem === 'reports' ? 'active' : ''}>
        <Link to="/reports">
          <i className="fa fa-line-chart" /> <span>Reports</span>
        </Link>
      </li>

    </ul>
  );
};


MenuTree.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default MenuTree;
