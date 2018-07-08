/**
 * Created by soufiaane on 7/21/17.
 */
/*
import { takeEvery, call, put } from 'redux-saga/effects';

import { authenticate }      from '../../api/auth';
import { authSuccessAction, authErrorAction} from '../../actions/login';
import { AUTH_REQUEST }      from '../../constants/session';


function* watchAuthRequest({username, password}) {
  try {
    const result = yield call(authenticate, username, password);
    yield put(authSuccessAction(result));
  } catch (error) {
    yield put(authErrorAction(error));
  }
}

export default function* authSaga() {
  yield takeEvery(AUTH_REQUEST, watchAuthRequest);
}
*/