import { SHOP_DATA } from '../../shopping-data';

const INITIAL_STATE = { collections: SHOP_DATA };

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.key) {
    default:
      return state;
  }
};

export default shopDataReducer;
