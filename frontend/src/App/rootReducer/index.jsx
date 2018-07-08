/**
 * Created by soufiaane on 7/8/17.
 */

import { routerReducer }          from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { combineReducers }        from 'redux';

import { authenticationReducer } from '../../Authentication';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  authentication: authenticationReducer,
});

export default rootReducer;
