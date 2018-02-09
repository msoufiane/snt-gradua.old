/**
 * Created by soufiaane on 7/3/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Settings = function Settings() {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      <div className="tab-content">
        <ul className="control-sidebar-menu">

          <li>
            <Link to="/categories">
              <i className="menu-icon fa fa-folder" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Categories</h4>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/configuration">
              <i className="menu-icon fa fa-cogs" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Configuration</h4>
              </div>
            </Link>
          </li>


          <li>
            <Link to="/users">
              <i className="menu-icon fa fa-users" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Users</h4>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/roles">
              <i className="menu-icon fa fa-lock" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Roles</h4>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/webhooks">
              <i className="menu-icon fa fa-exchange" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Webhooks</h4>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/custom-fields">
              <i className="menu-icon fa fa-list" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Custom Fields</h4>
              </div>
            </Link>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Settings;
