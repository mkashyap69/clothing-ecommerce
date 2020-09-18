import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cart_items
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cart_items) =>
    cart_items.reduce((accumulatedQuantity, cart_item) => {
      return accumulatedQuantity + cart_item.quantity;
    }, 0)
);
