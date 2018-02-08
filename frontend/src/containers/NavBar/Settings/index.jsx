/**
 * Created by soufiaane on 7/3/17.
 */

import React from 'react';

const Settings = function Settings() {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      <div className="tab-content">
        <ul className="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-newspaper-o" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Themes</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-folder" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Categories</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-cogs" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Configuration</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-life-ring" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">System Info</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-users" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Users</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-lock" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Roles</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-exchange" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Webhooks</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-list" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Custom Fields</h4>
              </div>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-plus-circle" />
              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Plugins</h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Settings;
