import React from 'react';
import PropTypes from 'prop-types';


const AppWrapper = function AppWrapper(props) {
  return (
    <div className="wrapper">
      {props.children}
    </div>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};


export default AppWrapper;
