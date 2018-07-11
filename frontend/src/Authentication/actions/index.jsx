import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '../constants';

export function requestLogin({username, password}) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: {username, password}
  }
}

export function loginSuccess({user, token}) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token,
    user
  }
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}


export function LogoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticated: false
  }
}

export function logoutError() {
  return {
    type: LOGOUT_FAILURE,
    isAuthenticated: true
  }
}
