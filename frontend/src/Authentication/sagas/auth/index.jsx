/**
 * Created by soufiaane on 7/21/17.
 */

import { takeEvery, call, put } from 'redux-saga/effects';
import { push }                 from 'react-router-redux';

import { authenticate }      from '../../api/auth';
import { authSuccessAction } from '../../actions/login';
import { AUTH_REQUEST }      from '../../constants/session';


function* watchAuthRequest({username, password, resolve, reject, dispatch}) {
  try {
    const result = yield call(authenticate, username, password, dispatch);
    yield call(resolve);
    yield put(authSuccessAction(result));
    yield put(push('/'));
  } catch (error) {
    // TODO treat error separatly
    yield call(reject, {serverError: error.response ? error.response.data.message : 'Something bad happend !'});
  }
}

export default function* authSaga() {
  yield takeEvery(AUTH_REQUEST, watchAuthRequest);
}
