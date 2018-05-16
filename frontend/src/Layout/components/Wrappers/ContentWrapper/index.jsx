import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from '../../Content/BreadCrumb'

const ContentWrapper = function ContentWrapper(props) {
  const {title} = props;
  return (
    <div className="content-wrapper">

      <section className="content-header">
        <div className='col-xs-5 col-sm-6 col-md-5'>
          <BreadCrumb title={title} />
        </div>

        <div className='col-xs-7 col-sm-6 col-md-7'>
          <div className='pull-right'>
            {props.children[0]}
          </div>
        </div>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            {props.children[1]}
          </div>
        </div>
      </section>

    </div>
  );
};

ContentWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    title: PropTypes.string.isRequired,
};


export default ContentWrapper;