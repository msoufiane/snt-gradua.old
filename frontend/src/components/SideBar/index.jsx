/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const SidebarWrapper = function SidebarWrapper(props) {
  const { Menu } = props;
  return (
    <aside className="main-sidebar">
      <section className="sidebar" style={{ height: 'auto' }}>
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
