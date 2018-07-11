import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware                           from 'redux-thunk'
import { routerMiddleware }                      from 'react-router-redux';
import createHistory                             from 'history/createBrowserHistory';
import reduxImmutableStateInvariant              from 'redux-immutable-state-invariant';

import rootReducer              from '../rootReducer';

export const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);

function configureStoreProd() {
  const enhancers = applyMiddleware(
    thunkMiddleware,
    reactRouterMiddleware
  );

  const store = createStore(
    rootReducer,
    compose(enhancers),
  );

  store.subscribe();
  return store;
}

function configureStoreDev() {
  const enhancers = applyMiddleware(
    thunkMiddleware,
    reactRouterMiddleware,
    reduxImmutableStateInvariant(),
  );

  const composeSetup = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; // eslint-disable-line no-underscore-dangle

  const store = createStore(
    rootReducer,
    composeSetup(enhancers),
  );

  store.subscribe();

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
