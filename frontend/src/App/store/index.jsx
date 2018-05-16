import reduxImmutableStateInvariant              from 'redux-immutable-state-invariant';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware                      from 'redux-saga';
import { routerMiddleware }                      from 'react-router-redux';
import createHistory                             from 'history/createBrowserHistory';

import rootSaga                 from '../rootSaga';
import rootReducer              from '../rootReducer';
import { loadState, saveState } from './localStorage';

export const history = createHistory();

function configureStoreProd() {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const enhancers = applyMiddleware(sagaMiddleware, reactRouterMiddleware);

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    compose(enhancers),
  );

  store.subscribe(() => {
    const state = store.getState();
    saveState({
      authUser: state.authUser,
    });
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev() {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  // const client = new ApolloClient();

  const enhancers = applyMiddleware(
    sagaMiddleware,
    reactRouterMiddleware,
    reduxImmutableStateInvariant(),
  );

  // eslint-disable-next-line no-underscore-dangle
  const composeSetup = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    composeSetup(enhancers),
  );

  store.subscribe(() => {
    const state = store.getState();
    saveState({
      authUser: state.authUser,
    });
  });

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
