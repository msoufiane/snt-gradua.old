import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumb = function BreadCrumb(props) {
  const {
    title: title,
  } = props;

  return (
    <h3 className='pull-left'>
      {title}
    </h3>
  );
};

BreadCrumb.propTypes = {
  title: PropTypes.string.isRequired,
};


export default BreadCrumb;
