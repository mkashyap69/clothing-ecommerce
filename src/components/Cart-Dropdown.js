import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import CustomButton from './CustomButton';
import { selectCartItems } from '../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../redux/action/cart-action';

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './styled-components/CartDropdown';
const CartDropdown = ({ cart_items, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cart_items.length ? (
        cart_items.map((cart_item) => (
          <CartItem key={cart_item.id} item={cart_item} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty!!</EmptyMessage>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  //we are destructuring cart out of state and then carItems out of cart
  cart_items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
