import React from 'react';
import {
  CartItemContainer,
  ItemDetails,
  CartItemImage,
} from './styled-components/CartItem';
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity}x${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);
export default CartItem;
