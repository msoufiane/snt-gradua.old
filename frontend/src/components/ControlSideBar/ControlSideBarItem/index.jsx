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
        <i className={'menu-icon fa fa-' + logo} />
        <div className="menu-info">
          <h4 className="control-sidebar-subheading">{text}</h4>
        </div>
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
