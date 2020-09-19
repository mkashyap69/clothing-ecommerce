export const toggleCartHidden = () => ({
  type: 'TOGGLE_CART_HIDDEN',
});

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const removeItem = (item) => ({
  type: 'REMOVE_ITEM',
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: 'REMOVE_ITEM_CART',
  payload: item,
});
