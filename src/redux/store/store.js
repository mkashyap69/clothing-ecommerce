import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root-sagas';

import rootReducer from '../reducers/root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //middleware the store is expecting should be an array

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
