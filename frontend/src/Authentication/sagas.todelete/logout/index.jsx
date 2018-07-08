/**
 * Created by soufiaane on 7/21/17.
 */
/*
import { takeEvery, call, put }                    from 'redux-saga/effects';
import { push }                                    from 'react-router-redux';
import { LOGOUT_REQUEST }            from '../../constants/session';
import { logoutSuccessAction, logoutErrorAction } from '../../actions/login';
import { logout }                    from '../../api/auth';

function* watchLogoutRequest({dispatch}) {
  try {
    const result = yield call(logout, dispatch);
    yield put(logoutSuccessAction(result));
    yield put(push('/login'));
  } catch (error) {
    // TODO treat error separatly
    yield put(logoutErrorAction(error));
  }
}

export default function* logoutSaga() {
  yield takeEvery(LOGOUT_REQUEST, watchLogoutRequest);
}
*/