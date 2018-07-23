import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import gql         from "graphql-tag";
import { Query }   from "react-apollo";

import { logoutUser }   from '../../../Authentication/api';
import ProfileComponent from '../../components/Header/Profile';

const GET_USER = gql`query{
  user{
    username
    firstName
    lastName
    email
  }
}`;

const ProfileContainer = ({handleLogout}) => {
  return (
    <Query query={GET_USER}>
      {({loading, error, data: {user} }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>`Error! ${error.message}`</p>;
        return <ProfileComponent user={user} handleLogout={handleLogout} />;
      }}
    </Query>
  );
};

ProfileContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => logoutUser(dispatch),
});

export default connect(null, mapDispatchToProps)(ProfileContainer);
