import React from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton.js';
import './styles/sign-in.styles.scss';
import { auth, signInWithGoogle } from '../firebase/firebase.util';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value }); //In Javascript, when you create an object literal {} and you wrap the object’s key in array brackets [key] you can dynamically set that key.
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="email"
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            label="password"
            value={this.state.password}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
