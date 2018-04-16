import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const MenuItem = function MenuItem(props) {
  const {
    active: Active,
    link: link,
    logo: logo,
    text: text,
  } = props;

  return (
    <li className={Active ? 'active' : ''}>
      <Link to={link}>
        <i className={'fa fa-' + logo} /> <span>{text}</span>
      </Link>
    </li>
  );
};


MenuItem.propTypes = {
  active: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
