import React from 'react';
import './styles/header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../src/assets/crown.svg';
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../components/CartIcon';
import CartDropdown from './Cart-Dropdown';
import { selectCurrentUser } from '../redux/selectors/user';
import { selectCartHidden } from '../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/* const mapStateToProps = (
  state  { user: { currentUser }, cart: { hidden } }
) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
}); */

export default connect(mapStateToProps)(Header);
