/**
 * Created by soufiaane on 7/22/17.
 */

import {loginError, loginSuccess, requestLogin, logoutError, LogoutSuccess} from '../actions';

export const loginUser =  ({username, password}) => {

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
          dispatch(loginError(user.message));
        } else {
          localStorage.setItem('id_token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          dispatch(loginSuccess(user))
        }
      })
  }
};


export const logoutUser = (dispatch) => {
  let config = {
    method: 'POST',
    headers: {'Authorization': 'Token '.concat(localStorage.getItem('id_token') || null)}
  };

  return fetch('api/auth/logout/', config).then(response => {
    if (!response.ok) {
      dispatch(logoutError(response.statusText));
    } else {
      localStorage.removeItem('id_token');
      localStorage.removeItem('user');
      dispatch(LogoutSuccess());
    }
  })
};
