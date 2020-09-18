import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CustomButton from './CustomButton';

import './styles/cart-dropdown.styles.scss';

const CartDropdown = ({ cart_items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cart_items.map((cart_item) => (
        <CartItem key={cart_item.id} item={cart_item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cart_items } }) => ({
  //we are destructuring cart out of state and then carItems out of cart
  cart_items,
});

export default connect(mapStateToProps)(CartDropdown);
