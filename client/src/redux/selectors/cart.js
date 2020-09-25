import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cart_items
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cart_items) =>
    cart_items.reduce((accumulatedQuantity, cart_item) => {
      return accumulatedQuantity + cart_item.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cart_items) =>
  cart_items.reduce((accumulatedPrice, cart_item) => {
    return accumulatedPrice + cart_item.quantity * cart_item.price;
  }, 0)
);
