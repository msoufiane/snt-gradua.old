/**
 * Created by soufiaane on 7/8/17.
 */

import { combineReducers }        from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer }          from 'react-router-redux';

import { loginReducer } from '../../Authentication';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  authentication: loginReducer,
});

export default rootReducer;
