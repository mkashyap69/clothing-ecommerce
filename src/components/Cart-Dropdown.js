import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import CustomButton from './CustomButton';
import { selectCartItems } from '../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../redux/action/cart-action';

import './styles/cart-dropdown.styles.scss';

const CartDropdown = ({ cart_items, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cart_items.length ? (
        cart_items.map((cart_item) => (
          <CartItem key={cart_item.id} item={cart_item} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty!!</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  //we are destructuring cart out of state and then carItems out of cart
  cart_items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
