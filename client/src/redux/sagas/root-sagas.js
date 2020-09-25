import { all, call } from 'redux-saga/effects';

import { fetchCollections } from './shop.sagas';

import { userSagas } from './user.sagas';
import {cartSagas} from './cart.sagas'

export default function* rootSaga() {
  yield all([call(fetchCollections), call(userSagas), call(cartSagas)]);
}

//all will instantiate all sagas side by side
