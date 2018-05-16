import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { submit } from 'redux-form';

import { history } from '../../../App';
import { ContentWrapper } from '../../../Layout/components/Wrappers';
import CreateRoleForm from '../../../containers/Roles/CreateRoleForm';

const newRole = function ({ handleSubmit }) {
  return (
    <ContentWrapper title="Roles - New Role">
      <div className="btn-group" role="group" style={{marginTop: '10px'}}>
        <button type="button" className="btn btn-default btn-cancel btn-copy" onClick={history.goBack}>
          <i className="fa fa-times text-danger" />&nbsp;Cancel
        </button>
        <button type="button" className="btn btn-default btn-save btn-copy" onClick={handleSubmit}>
          <i className="fa fa-save text-success" />&nbsp;Save
        </button>
      </div>

      <div className="nav-tabs-custom">
        <ul className="nav nav-tabs pr-md pl-md">
          <li className="active"><a href="#new_role_details" data-toggle="tab" aria-expanded="true">Details</a></li>
          <li><a href="#new_role_permissions" data-toggle="tab">Permissions</a></li>
        </ul>

        <CreateRoleForm />
      </div>
    </ContentWrapper>
  );
};

newRole.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  //values: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => dispatch(submit('createRole')),
});

const mapStateToProps = state => ({
  //values : getFormValues('createRole')(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(newRole);