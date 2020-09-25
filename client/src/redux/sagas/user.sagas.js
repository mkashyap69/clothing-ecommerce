import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  SignInSuccess,
  SignInFailure,
  SignOutFailure,
  SignOutSuccess,
  signUpFailure,
  signUpSuccess,
} from '../action/user-action';

import {
  googleProvider,
  auth,
  createUserProfileDoc,
  getCurrentUser,
} from '../../firebase/firebase.util';

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDoc, user);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    put(SignInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(SignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail);
}

export function* onSignOutSuccess() {
  try {
    yield auth.signOut();
    yield put(SignOutSuccess());
  } catch (error) {
    yield put(SignOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest('SIGN_OUT_START', onSignOutSuccess);
}

/*  const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName }); */

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* onSignUpStart() {
  yield takeLatest('SIGN_UP_START', signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest('SIGN_UP_SUCCESS', signInAfterSignUp);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest('CHECK_USER_SESSION', isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onCheckUserSession),
  ]);
}
