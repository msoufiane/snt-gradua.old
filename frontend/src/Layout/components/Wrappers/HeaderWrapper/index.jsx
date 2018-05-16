import React from 'react';
import PropTypes from 'prop-types';
import { NavbarLogo, NavbarMenu, NavbarToggle } from '../../Header';


const HeaderWrapper = function HeaderWrapper(props) {
  return (
    <header className="main-header">
      <NavbarLogo />
      <nav className="navbar navbar-static-top">
        <NavbarToggle />
        <NavbarMenu>
          {props.children}
        </NavbarMenu>
      </nav>
    </header>
  );
};

HeaderWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};


export default HeaderWrapper;
