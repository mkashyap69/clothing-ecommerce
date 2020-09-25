export const googleSignInStart = () => ({
  type: 'GOOGLE_SIGN_IN_START',
});

export const emailSignInStart = (email, password) => ({
  type: 'EMAIL_SIGN_IN_START',
  payload: { email, password },
});

export const SignInSuccess = (user) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: user,
});

export const SignInFailure = (error) => ({
  type: 'SIGN_IN_FAILURE',
  payload: error,
});

export const SignOutSuccess = () => ({
  type: 'SIGN_OUT_SUCCESS',
});

export const SignOutStart = () => ({
  type: 'SIGN_OUT_START',
});

export const SignOutFailure = (error) => ({
  type: 'SIGN_OUT_FAILURE',
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: 'SIGN_UP_START',
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: 'SIGN_UP_SUCCESS',
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: 'SIGN_UP_FAILURE',
  payload: error,
});


export const checkUserSession=()=>({
  type:'CHECK_USER_SESSION'
})