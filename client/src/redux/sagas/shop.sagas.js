import { takeLatest, call, put } from 'redux-saga/effects';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from '../action/shop-action';
import { firestore, convertSnapshotToMap } from '../../firebase/firebase.util';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertSnapshotToMap, snapshot); //call is just for calling functions
    yield put(fetchCollectionsSuccess(collectionsMap)); //put is for dispatching actions
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollections() {
  yield takeLatest('FETCH_COLLECTIONS_START', fetchCollectionAsync);//fires the latest call only one time
}
