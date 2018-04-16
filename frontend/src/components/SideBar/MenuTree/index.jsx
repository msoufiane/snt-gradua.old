import React from 'react';
import PropTypes from "prop-types";

const MenuTree = function MenuTree(props) {
  const {
    active: Active,
    logo: logo,
    text: text,
  } = props;

  return (
    <li className={'treeview' + (Active ? ' active' : '')}>
      <a href="#"><i className={'fa fa-' + logo} /> <span>{text}</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right" />
        </span>
      </a>
      <ul className="treeview-menu">
        {props.children}
      </ul>
    </li>
  );
};


MenuTree.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  active: PropTypes.bool.isRequired,
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuTree;
