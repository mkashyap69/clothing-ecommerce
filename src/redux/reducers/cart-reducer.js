import { addItemToCart, removeItem } from '../cart.util';

const INITIAL_STATE = {
  hidden: true,
  cart_items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cart_items: addItemToCart(state.cart_items, action.payload),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart_items: removeItem(state.cart_items, action.payload),
      };
    case 'REMOVE_ITEM_CART':
      return {
        ...state,
        cart_items: state.cart_items.filter(
          (cart_item) => cart_item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
