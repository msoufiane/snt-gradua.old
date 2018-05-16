/**
 * Created by soufiaane on 7/9/17.
 */

import * as sessionTypes from '../constants/session';

export function authRequestAction(payload) {
  return {type: sessionTypes.AUTH_REQUEST, ...payload};
}

export function authSuccessAction(response) {
  return {type: sessionTypes.AUTH_SUCCESS, ...response};
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
