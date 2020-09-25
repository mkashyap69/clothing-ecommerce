import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton.js';
import './styles/sign-in.styles.scss';
import {
  googleSignInStart,
  emailSignInStart,
} from '../redux/action/user-action';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value }); //In Javascript, when you create an object literal {} and you wrap the object’s key in array brackets [key] you can dynamically set that key.
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          type="email"
          label="email"
          value={email}
          required
        />
        <FormInput
          name="password"
          handleChange={handleChange}
          type="password"
          label="password"
          value={password}
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
          Sign In With Google
        </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
