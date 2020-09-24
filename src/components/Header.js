import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './styled-components/Header.styles';
import { ReactComponent as Logo } from '../../src/assets/crown.svg';
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../components/CartIcon';
import CartDropdown from './Cart-Dropdown';
import { selectCurrentUser } from '../redux/selectors/user';
import { selectCartHidden } from '../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';
import { SignOutStart } from '../redux/action/user-action';

const Header = ({ currentUser, hidden, SignOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={SignOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/sign-in">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  SignOutStart: () => dispatch(SignOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
