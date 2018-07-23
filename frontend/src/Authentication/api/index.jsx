/**
 * Created by soufiaane on 7/22/17.
 */

import cookie                                                                 from "react-cookies";
import { loginError, loginSuccess, requestLogin, logoutError, LogoutSuccess } from '../actions';

export const loginUser = ({username, password}) => {

  let config = {
    method: 'POST',
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
    },
    body: JSON.stringify({username, password})
  };

  return dispatch => {
    dispatch(requestLogin({username, password}));

    return fetch('/api/auth/login/', config)
      .then(response => response.json().then(user => ({user, response})))
      .then(({user, response}) => {
        if (!response.ok) {
          dispatch(loginError(user.message));
        } else {
          localStorage.setItem('id_token', user.token);
          dispatch(loginSuccess(user))
        }
      })
  }
};


export const logoutUser = (dispatch) => {
  let config = {
    method: 'POST',
    credentials: "same-origin",
    headers: {
      'Authorization': 'Token '.concat(localStorage.getItem('id_token') || null),
      'X-CSRFToken': cookie.load('csrftoken') || null,
    }
  };

  return fetch('/api/auth/logout/', config).then(response => {
    if (!response.ok) {
      dispatch(logoutError(response.statusText));
    } else {
      localStorage.removeItem('id_token');
      dispatch(LogoutSuccess());
    }
  })
};
