import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers/root-reducer';

const middlewares = [logger]; //middleware the store is expecting should be an array

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);


