import React from 'react';
import {
  CartItemContainer,
  ItemCount,
  ShoppingIcon,
} from './styled-components/CartIcon.styles';
import { toggleCartHidden } from '../redux/action/cart-action';
import { connect } from 'react-redux';
import { selectCartItemsQuantity } from '../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartItemContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>{itemCount}</ItemCount>
  </CartItemContainer>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsQuantity,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
