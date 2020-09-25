import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import userReducer from './user-reducer';
import cartReducer from './cart-reducer';
import directoryReducer from './directory-reducer';
import shopDataReducer from './shop-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop_data: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
