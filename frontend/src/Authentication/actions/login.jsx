/**
 * Created by soufiaane on 7/9/17.
 */

import * as sessionTypes from '../constants/session';

export function authRequestAction(payload) {
  return {type: sessionTypes.AUTH_REQUEST, ...payload};
}

export function authSuccessAction(response) {
  //eslint-disable-next-line no-console
  console.log('AUTH_SUCCESS : ', response);
  return {type: sessionTypes.AUTH_SUCCESS, response};
}

export function authErrorAction(error) {
  return {type: sessionTypes.AUTH_ERROR, error};
}

export function logoutRequestAction() {
  return {type: sessionTypes.LOGOUT_REQUEST};
}

export function logoutSuccessAction() {
  return {type: sessionTypes.LOGOUT_SUCCESS};
}

export function logoutErrorAction(error) {
  return {type: sessionTypes.LOGOUT_ERROR, ...error};
}
