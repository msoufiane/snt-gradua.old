/**
 * Created by soufiaane on 7/3/17.
 */

import React from 'react';
import PropTypes from "prop-types";

const ControlSideBarWrapper = function ControlSideBarWrapper(props) {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      <div className="tab-content">
        {props.children}
      </div>
    </aside>
  );
};


ControlSideBarWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ControlSideBarWrapper;
