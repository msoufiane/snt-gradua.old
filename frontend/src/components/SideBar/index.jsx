import React from 'react';
import PropTypes from 'prop-types';

const SidebarWrapper = function SidebarWrapper(props) {
  const {
    activeItem: ActiveItem,
    Menu
  } = props;
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

        <Menu activeItem={ActiveItem} />
      </section>
    </aside>
  );
};

SidebarWrapper.propTypes = {
  activeItem: PropTypes.string.isRequired,
  Menu: PropTypes.element.isRequired,
};

export default SidebarWrapper;
