import React from 'react';
import PropTypes from 'prop-types';

// region Content Imports
import {
  ContentBody,
  ContentHeader,
  ContentWrapper,
} from './components/Content';

import BreadCrumb from './containers/Content/BreadCrumb';
// endregion

// region NavBar imports
import NavbarWrapper from './components/NavBar/NavbarWrapper';

import {
  //Tasks,
  Profile,
  Settings,
  //Messages,
  Notifications,
} from './containers/NavBar';
// endregion

// region SideBar imports
import SideBarWrapper from './components/SideBar';

import {
  MenuTree,
  //UserPanel,
} from './containers/SideBar';
// endregion

// region Footer Importq
import Footer from './components/Footer';
// endregion

const App = function App(props) {
  return (
    <div className="wrapper">
      <NavbarWrapper>
        <Notifications />
        <Profile />
        <li>
          <a href="#" data-toggle="control-sidebar"><i className="fa fa-cog" /></a>
        </li>
      </NavbarWrapper>

      <SideBarWrapper Menu={MenuTree} />

      <ContentWrapper>
        <ContentHeader>
          <BreadCrumb />
        </ContentHeader>
        <ContentBody>
          {props.children}
        </ContentBody>
      </ContentWrapper>

      <Footer />
      <Settings />
      <div className="control-sidebar-bg" />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;