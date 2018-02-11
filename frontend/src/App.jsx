import React from 'react';
import PropTypes from 'prop-types';

import NavbarWrapper from './components/NavBar/NavbarWrapper';

import {
  Profile,
  Settings,
  Notifications,
} from './containers/NavBar';

import SideBarWrapper from './components/SideBar';
import Footer from './components/Footer';
import { MenuTree } from './containers/SideBar';


const App = function App(props) {
  const {
    activeItem: ActiveItem,
  } = props;
  return (
    <div className="wrapper">
      <NavbarWrapper>
        <Notifications />
        <Profile />
        <li>
          <a href="#" data-toggle="control-sidebar"><i className="fa fa-cog" /></a>
        </li>
      </NavbarWrapper>

      <SideBarWrapper Menu={MenuTree} activeItem={ActiveItem} />

      {props.children}

      <Footer />

      <Settings activeItem={ActiveItem} />
      <div className="control-sidebar-bg" />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default App;