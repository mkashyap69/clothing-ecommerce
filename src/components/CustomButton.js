import React from 'react';
import './styles/custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${
      isGoogleSignIn ? 'google-sign-in custom-button' : 'custom-button'
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
