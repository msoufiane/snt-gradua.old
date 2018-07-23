/* eslint-disable jsx-a11y/label-has-for */
import React     from 'react';
import PropTypes from 'prop-types';

import { connect }          from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { serverSelect, availableMTASelect, selectedVMTASelect, splitEmailsBySelect, emailsProcessTypeSelect }     from '../../components';


class NewCampaignForm extends React.Component {
  serverError = () => {
    const {errorMessage} = this.props;
    return (errorMessage &&
      <div className='form-group has-feedback has-error'>
        <span className="help-block"> {errorMessage} </span>
      </div>
    )
  };

  submit = (credentials) => {
  };

  render() {
    const {handleSubmit} = this.props;
    return (
      <form name="NewCampaignForm" onSubmit={handleSubmit(this.submit)}>
        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header ui-sortable-handle">
              <i className="fa fa-hdd-o" /><h3 className="box-title">Servers / IPs section</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className="fa fa-minus" />
                </button>
              </div>
            </div>

            <div className="box-body">
              <Field name="servers" component={serverSelect} />

              <div className="col-xs-6" style={{padding: "0"}}>
                <Field name="availableMTAS" component={availableMTASelect} />
              </div>

              <div className="col-xs-6" style={{paddingRight: "5px"}}>
                <Field name="selectedMTAS" component={selectedVMTASelect} />
              </div>

              <div className="col-xs-6" style={{padding: "0"}}>
                <Field name="availableMTAS" component={splitEmailsBySelect} />
              </div>

              <div className="col-xs-6" style={{paddingRight: "5px"}}>
                <Field name="availableMTAS" component={emailsProcessTypeSelect} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header ui-sortable-handle">
              <i className="fa fa-dollar" /><h3 className="box-title">Sponsors / Offers section</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className="fa fa-minus" />
                </button>
              </div>
            </div>

            <div className="box-body">
              <Field name="username" component={serverSelect} />
            </div>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header ui-sortable-handle">
              <i className="fa fa-hdd-o" /><h3 className="box-title">Tests / Auto Reply section</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className="fa fa-minus" />
                </button>
              </div>
            </div>

            <div className="box-body">
              <Field name="username" component={serverSelect} />
            </div>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="box box-solid">
            <div className="box-header ui-sortable-handle">
              <i className="fa fa-hdd-o" /><h3 className="box-title">Emails list</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className="fa fa-minus" />
                </button>
              </div>
            </div>

            <div className="box-body">
              <Field name="username" component={serverSelect} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-7" />
          <div className="col-xs-5">
            <button className="btn btn-block btn-social btn-bitbucket btn-flat" type="submit">
              <i className="fa fa-sign-in" />Sign In
            </button>
          </div>
        </div>
        {this.serverError()}
      </form>
    );
  }
}

const validate = (values) => {
  const {username, password} = values;
  const errors = {};
  if (!username || username.trim() === '') {
    errors.username = 'Username field is required !';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Password field is required !';
  }
  return errors;
};

NewCampaignForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

NewCampaignForm.defaultProps = {
  errorMessage: ""
};

export default reduxForm({form: 'newCampaign', validate})(connect(null, null)(NewCampaignForm));
