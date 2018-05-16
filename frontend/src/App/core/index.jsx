import React     from 'react';
import PropTypes from 'prop-types';

import {
  AppWrapper, HeaderWrapper, SideBarWrapper, ControlSideBarWrapper,
  Profile, Notifications, ControlSideBarButton,
  ControlSideBarMenu, SideBarMenu, Footer
} from '../../Layout';


const App = function App(props) {
  const {
    activeItem: ActiveItem,
  } = props;
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Notifications />
        <Profile />
        <ControlSideBarButton />
      </HeaderWrapper>

      <SideBarWrapper>
        <SideBarMenu activeItem={ActiveItem} />
      </SideBarWrapper>
      {props.children}
      <div className='clearfix' />
      <Footer />

      <ControlSideBarWrapper>
        <ControlSideBarMenu activeItem={ActiveItem} />
      </ControlSideBarWrapper>
      <div className="control-sidebar-bg" />
    </AppWrapper>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default App;