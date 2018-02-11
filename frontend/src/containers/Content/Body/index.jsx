import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from '../BreadCrumb'

const Body = function Body(props) {
  const {
    headerTitle: HeaderTitle,
    headerControls: HeaderControls,
  } = props;

  return (
    <div className="content-wrapper" style={{ minHeight : '594px' }}>
      <section className="content-header">
        <div className='col-xs-5 col-sm-6 col-md-5'>
          <BreadCrumb title={HeaderTitle} />
        </div>
        <div className="col-xs-2 text-right pull-left" />
        <div className='col-xs-7 col-sm-6 col-md-7'>
          <div className='pull-right'>
            <HeaderControls />
          </div>
          <div className='clearfix' />
        </div>
      </section>
      <section className="content">
        {props.children}
      </section>
    </div>
  );
};

Body.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    headerControls: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
};


export default Body;