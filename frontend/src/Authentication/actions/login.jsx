/**
 * Created by soufiaane on 7/9/17.
 */

import * as sessionTypes from '../constants/session';

function requestLogin({username, password}) {
  return {
    type: sessionTypes.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: {username, password}
  }
}

function receiveLogin({user, token}) {
  return {
    type: sessionTypes.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token,
    user
  }
}

function loginError(message) {
  return {
    type: sessionTypes.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export default function loginUser({username, password}) {

  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${username}&password=${password}`
  };

  return dispatch => {
    dispatch(requestLogin({username, password}));

    return fetch('api/auth/login/', config)
      .then(response => response.json().then(user => ({user, response})))
      .then(({user, response}) => {
        if (!response.ok) {
          // If there was a problem, we want to dispatch the error condition
          dispatch(loginError(user.message));
          // return Promise.reject(user)
        } else {
          // eslint-disable-next-line no-console
          console.log(user);
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      })
  }
}