/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import loginUser from '../../../Authentication/actions/login';
import PermissionsQuery from '../../../gql/queries/roles/permissionsQuery';


class CreateRoleForm extends React.Component {
  rolenameInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;
    return (
      <div className="form-group col-xs-12" >
        <label htmlFor="role_name" className="control-label required">Name</label>
        <input name="role_name" type="text" id="role_name" required="required" className="form-control" autoComplete="false" />
        {hasError && <span className="help-block"> {error} </span>}
      </div>
    );
  };

  roledescriptionInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;
    return (
      <div className="form-group col-xs-12 ">
        <label className="control-label" htmlFor="role_description">Description</label>
        <div className="fr-box fr-basic fr-top"  style={{minHeight: '100px', borderColor: '#d2d6de'}}>
          <textarea id="role_description" name="role[description]" className="form-control editor" autoComplete="false" />
          {hasError && <span className="help-block"> {error} </span>}
        </div>
      </div>
    );
  };

  passwordInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;
    return (
      <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
        <label className="glyphicon glyphicon-lock form-control-feedback" htmlFor="password" />
        <input className="form-control" placeholder="Password" type="password" autoComplete="false" {...input} {...custom} />
        {hasError && <span className="help-block"> {error} </span>}
      </div>
    );
  };

  serverError = ({ meta: { error } }) => (
    <div className={error !== undefined ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
      {error !== undefined && <span className="help-block"> {error} </span>}
    </div>
  );

  submit = (props, credentials) => {
    const { handleLogin } = props;
    return new Promise((resolve, reject) => {
      handleLogin({ ...credentials, resolve, reject });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  };

  render() {
    const { handleSubmit } = this.props;

    // eslint-disable-next-line no-console
    // console.log(permissionsList);

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div className="tab-content">

          <div className="tab-pane active" id="new_role_details">
            <div className="row form-row">
              <div className="col-md-6">
                <div className="row form-row">
                  <Field name="role_name" component={this.rolenameInput} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="row form-row">
                  <div className="form-group col-xs-12">
                    <label className="control-label" data-toggle="tooltip" data-container="body" data-placement="top" title="" data-original-title="If set to yes, any user assigned to this role will have full access to all areas. If no, configure the permissions via the Permissions tab.">Has full system access? <i className="fa fa-question-circle" /></label>

                    <div className="choice-wrapper">
                      <div className="btn-group btn-block" data-toggle="buttons">
                        <label className="btn btn-default  active btn-no btn-danger">
                          <Field name="role_isAdmin_0" component="input" type="radio" id="role_isAdmin_0" style={{width: '1px', height: '1px', top: '0', left: '0', marginTop: '0'}} autoComplete="false" value="0" checked="checked" />
                          <span>No</span>
                        </label>
                        <label className="btn btn-default  btn-yes">
                          <Field name="role_isAdmin_1" component="input" type="radio" id="role_isAdmin_1" style={{width: '1px', height: '1px', top: '0', left: '0', marginTop: '0'}} autoComplete="false" value="1" />
                          <span>Yes</span>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="row form-row">
              <div className="col-md-6">
                <Field name="role_description" component={this.roledescriptionInput} />
              </div>
            </div>

          </div>

          <div className="tab-pane" id="new_role_permissions">
            <div className="box-body">
              <PermissionsQuery />
            </div>

            <Field name="serverError" component={this.serverError} />
          </div>

        </div>
      </form>
    );
  }
}

CreateRoleForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
};

const validate = (values) => {
  const { username, password } = values;
  const errors = {};
  if (!username || username.trim() === '') {
    errors.username = 'Username field is required !';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Password field is required !';
  }
  return errors;
};

const mapDispatchToProps = dispatch => ({
  handleLogin: payload => dispatch(loginUser(payload)),
});

const formContainer = connect(null, mapDispatchToProps)(CreateRoleForm);
const formConfig = { form: 'createRole', validate };

export default reduxForm(formConfig)(formContainer);