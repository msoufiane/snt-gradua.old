/* eslint-disable jsx-a11y/label-has-for */

import React     from 'react';
import PropTypes from 'prop-types';

import { connect }          from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { push }             from 'react-router-redux';

import {loginUser} from '../../api';

class LoginForm extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.isAuthenticated) this.props.redirectAfterLogin('/');
  }

  usernameInput = ({input, meta: {touched, error}, ...custom}) => {
    const hasError = touched && error !== undefined;
    return (
      <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
        <input className="form-control" placeholder="Username" type="text" {...input} {...custom} />
        <label className="glyphicon glyphicon-envelope form-control-feedback" htmlFor="username" />
        {hasError && <span className="help-block"> {error} </span>}
      </div>
    );
  };

  passwordInput = ({input, meta: {touched, error}, ...custom}) => {
    const hasError = touched && error !== undefined;
    return (
      <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
        <input className="form-control" placeholder="Password" type="password" {...input} {...custom} />
        <label className="glyphicon glyphicon-lock form-control-feedback" htmlFor="password" />
        {hasError && <span className="help-block"> {error} </span>}
      </div>
    );
  };

  serverError = () => {
    const {errorMessage} = this.props;
    return ( errorMessage &&
      <div className='form-group has-feedback has-error'>
        <span className="help-block"> {errorMessage} </span>
      </div>
    )
  };

  submit = (credentials) => {
    this.props.handleLogin({...credentials});
  };

  render() {
    const {handleSubmit, isFetching} = this.props;
    return (
      <form name="loginForm" onSubmit={handleSubmit(this.submit)}>
        <Field name="username" component={this.usernameInput} />
        <Field name="password" component={this.passwordInput} />
        <div className="row">
          <div className="col-xs-7" />
          <div className="col-xs-5">
            <button className="btn btn-block btn-social btn-bitbucket btn-flat" type="submit" disabled={isFetching}>
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

LoginForm.propTypes = {
  redirectAfterLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  errorMessage: ""
};

const mapStateToProps = state => ({
  isFetching: state.authentication.isFetching,
  isAuthenticated: state.authentication.isAuthenticated,
  errorMessage: state.authentication.errorMessage
});

const mapDispatchToProps = dispatch => ({
  redirectAfterLogin: path => dispatch(push(path)),
  handleLogin: payload => dispatch(loginUser(payload)),
});

export default reduxForm({form: 'login', validate})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
