import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './styles/sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
