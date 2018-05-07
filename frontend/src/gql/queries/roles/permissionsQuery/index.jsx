import React from "react";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import { graphql } from 'react-apollo';

const GET_PERMISSIONS = gql`query{
  allPermissions{
    id
    appLabel
    model
    permissionSet{
      id
      name
      codename
    }
  }
}`;


class permissionsQuery extends React.Component {
  render() {
    // eslint-disable-next-line no-console
    console.log(this.props.data);
    return this.props.children(this.props.data);
  }
}

permissionsQuery.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
};

export default graphql(GET_PERMISSIONS)(permissionsQuery);