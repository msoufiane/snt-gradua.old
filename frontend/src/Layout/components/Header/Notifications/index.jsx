/**
 * Created by soufiaane on 7/3/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = function Notifications() {
  return (
    <li className="dropdown notifications-menu">
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-bell-o" />
        <span className="label label-warning">10</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have 10 notifications</li>
        <li>
          <ul className="menu">
            <li>
              <Link to="/notifications">
                <i className="fa fa-users text-aqua" /> 5 new members joined today
              </Link>
            </li>
          </ul>
        </li>
        <li className="footer"><Link to="/notifications">View all</Link></li>
      </ul>
    </li>
  );
};

export default Notifications;
