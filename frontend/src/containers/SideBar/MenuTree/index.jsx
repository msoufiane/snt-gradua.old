import React from 'react';
import { Link } from 'react-router-dom';

const MenuTree = function MenuTree() {
  return (
    <ul className="sidebar-menu" data-widget="tree">
      <li>
        <Link to="/dashboard">
          <i className="fa fa-dashboard" /> <span>Dashboard</span>
        </Link>
      </li>

      <li>
        <Link to="/offers">
          <i className="fa fa-dollar" /> <span>Offers</span>
        </Link>
      </li>

      <li>
        <Link to="/servers">
          <i className="fa fa-hdd-o" /> <span>Servers</span>
        </Link>
      </li>

      <li>
        <Link to="/traffic-sources">
          <i className="fa fa-bullhorn" /> <span>Traffic Sources</span>
        </Link>
      </li>

      <li>
        <Link to="/contacts">
          <i className="fa fa-user" /> <span>Contacts</span>
        </Link>
      </li>

      <li>
        <Link to="/segments">
          <i className="fa fa-pie-chart" /> <span>Segments</span>
        </Link>
      </li>

      <li className="treeview">
        <a href="#"><i className="fa fa-puzzle-piece" /> <span>Components</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li><Link to="/components"><i className="fa fa-dot-circle-o" />Assets</Link></li>
          <li><Link to="/components"><i className="fa fa-dot-circle-o" />Forms</Link></li>
          <li><Link to="/components"><i className="fa fa-dot-circle-o" />Landing Pages</Link></li>
          <li><Link to="/components"><i className="fa fa-dot-circle-o" />Dynamic Contents</Link></li>
        </ul>
      </li>

      <li>
        <Link to="/campaigns">
          <i className="fa fa-paper-plane" /> <span>Campaigns</span>
        </Link>
      </li>

      <li>
        <Link to="/reports">
          <i className="fa fa-line-chart" /> <span>Reports</span>
        </Link>
      </li>

    </ul>
  );
};

export default MenuTree;
