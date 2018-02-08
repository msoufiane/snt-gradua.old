/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

//  style={{ height: 'auto' }}
const SidebarWrapper = function SidebarWrapper(props) {
  const { Menu } = props;
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..." />
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                <i className="fa fa-search" />
              </button>
            </span>
          </div>
        </form>

        <Menu />
      </section>
    </aside>
  );
};

SidebarWrapper.propTypes = {
  //UserPanel: PropTypes.func.isRequired,
  Menu: PropTypes.func.isRequired,
};

export default SidebarWrapper;
