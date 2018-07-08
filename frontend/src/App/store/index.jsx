import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware                           from 'redux-thunk'
import { routerMiddleware }                      from 'react-router-redux';
import createHistory                             from 'history/createBrowserHistory';
import reduxImmutableStateInvariant              from 'redux-immutable-state-invariant';

import rootReducer              from '../rootReducer';
// import { loadState, saveState } from './localStorage';

export const history = createHistory();

function configureStoreProd() {
  const reactRouterMiddleware = routerMiddleware(history);
  const enhancers = applyMiddleware(thunkMiddleware, reactRouterMiddleware);

  //const persistedState = loadState();

  const store = createStore(
    rootReducer,
    //persistedState,
    compose(enhancers),
  );

  store.subscribe(() => {
    // const state = store.getState();
    //saveState({authUser: state.authUser,});
  });

  return store;
}

function configureStoreDev() {
  const reactRouterMiddleware = routerMiddleware(history);

  const enhancers = applyMiddleware(
    thunkMiddleware,
    reactRouterMiddleware,
    reduxImmutableStateInvariant(),
  );

  // eslint-disable-next-line no-underscore-dangle
  const composeSetup = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  // const persistedState = loadState();

  const store = createStore(
    rootReducer,
    // persistedState,
    composeSetup(enhancers),
  );

  store.subscribe(() => {
    /*const state = store.getState();
    saveState({
      authUser: state.authUser,
    });*/
  });

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
