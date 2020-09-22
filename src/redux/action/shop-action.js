import { firestore, convertSnapshotToMap } from '../../firebase/firebase.util';

const fetchCollectionsStart = () => ({
  type: 'FETCH_COLLECTIONS_START',
});

const fetchCollectionsSuccess = (collectionMap) => ({
  type: 'FETCH_COLLECTIONS_SUCCESS',
  payload: collectionMap,
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: 'FETCH_COLLECTIONS_FAILURE',
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collection');
    dispatch(fetchCollectionsStart());

    //using promise pattern instead of observables and observer
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => {
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};
